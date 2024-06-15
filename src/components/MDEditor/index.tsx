"use client";
import { useEffect } from "react";
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { TiptapExtensions } from "./extensions";
import { TiptapEditorProps } from "./props";
import { cn } from "@/lib/utils";

export const MDEditor: React.FC<{
  onUpdate?: (updateContent) => void;
  content: string;
  className?: string;
  readOnly?: boolean;
  data?: any;
}> = ({ content, data, onUpdate, readOnly = true, className }) => {
  const editorProps = { ...TiptapEditorProps };
  // TODO: we are monkey patching this! we need some data during file upload in order to connect it to the event.
  // @ts-ignore
  editorProps.data = data;

  // TIPTAP
  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: editorProps,
    editable: !readOnly,
    onUpdate: (e) => {
      const selection = e.editor.state.selection;
      const lastTwo = e.editor.state.doc.textBetween(
        selection.from - 2,
        selection.from,
        "\n",
      );
      onUpdate && onUpdate(e.editor.storage.markdown.getMarkdown());
    },
  });

  const [hydrated, setHydrated] = useState(false);

  // Hydrate the editor with the content
  useEffect(() => {
    if (editor && content && !hydrated) {
      editor.commands.setContent(content);
      setHydrated(true);
    }
  }, [editor, content, hydrated]);

  return (
    <div
      className={cn("flex flex-row items-center justify-between", className)}
    >
      <EditorContent editor={editor} className="w-full" />
    </div>
  );
};
