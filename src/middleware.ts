import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'sv'],
 
  // Used when no locale matches
  defaultLocale: 'sv',
  localePrefix: 'never',
  
  domains: [
    {
      domain: `en.hojden-studios.vercel.app`,
      defaultLocale: 'en',
      // Optionally restrict the locales available on this domain
      locales: ['en']
    },
    {
      domain: "hojden-studios.vercel.app",
      defaultLocale: 'sv',
      locales: ['sv']
      // If there a re no `locales` specified on a domain,
      // all available locales will be supported here
    }
  ]
});
 
export const config = {
  // Match only internationalized pathnames
  /* matcher: ['/', '/(sv|en)/:path*']
   */
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};