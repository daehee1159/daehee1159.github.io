export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'github_pages',
  },
  app: {
    baseURL: '/',
  },
  css: ['~/assets/styles/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
