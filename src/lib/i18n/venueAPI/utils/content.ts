import { useLocale } from "next-intl";

export const getLocalizedContent = (localizedContent: Array<any>) => {
  const locale = useLocale();

  const content = localizedContent.find((content) => content.locale === locale);

  return { content, locale };
};
