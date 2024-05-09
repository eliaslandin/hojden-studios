import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "sv"],

  // Used when no locale matches
  defaultLocale: "sv",
  localePrefix: "never",
  localeDetection: false,

  domains: [
    {
      domain: `en.${process.env.VERCEL_PROJECT_PRODUCTION_URL?.split(":")[0] || "localhost"}`,
      defaultLocale: "en",
      // Optionally restrict the locales available on this domain
      locales: ["en"],
    },
    {
      domain:
        process.env.VERCEL_PROJECT_PRODUCTION_URL?.split(":")[0] || "localhost",
      defaultLocale: "sv",
      locales: ["sv"],
      // If there a re no `locales` specified on a domain,
      // all available locales will be supported here
    },
  ],
});

export const config = {
  // Match only internationalized pathnames
  /* matcher: ['/', '/(sv|en)/:path*']
   */
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
