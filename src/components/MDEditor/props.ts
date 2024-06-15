// import { EditorProps } from "@tiptap/pm/view";

export const TiptapEditorProps: any = {
  // @ts-ignore
  data: {},
  attributes: {
    class:
      "prose prose-stone prose-headings:font-cal focus:outline-none max-w-full dark:prose-invert",
    contextId: null,
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
          return true;
        }
      }
    },
  },
  handlePaste: (view, event) => {
    return false;
  },
  handleDrop: (view, event, _slice, moved) => {
    return false;
  },
};
