import { redirect } from "@/navigation"
import { SupportedLocale } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params }: { params: { locale: SupportedLocale }}) {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  redirect("/hojden-sessions")
}