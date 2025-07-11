import defineSitemapConfig from "@nuxtjs/sitemap"

export default defineSitemapConfig({
  siteUrl: 'https://majorcraftr.romainnigond.fr',
  sitemap: {
    gzip: true
  },
  routes: [
    '/',
    '/offres',
    '/contact',
    '/a-propos',
    '/mentions-legales'
  ]
})