// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { join } from 'path'


export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  alias: {
    '@assets': join(fileURLToPath(new URL('.', import.meta.url)), 'assets')
  },
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/seo',
  ],
  app: {
    head: {
      title: 'MAjorCraft - Création de site vitrine pro',
      htmlAttrs: { lang: 'fr' },
      link: [{ rel: 'icon', href: '/logo-full.png' }]
    }
  },
})