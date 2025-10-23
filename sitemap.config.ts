import defineSitemapConfig from '@nuxtjs/sitemap'

export default defineSitemapConfig({
  siteUrl: 'https://majorcraft.romainnigond.fr',
  gzip: true,
  routes: [
    '/',
    '/offres',
    '/contact',
    '/a-propos',
    '/mentions-legales'
  ]
})
