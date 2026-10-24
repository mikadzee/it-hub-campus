// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  router: {
    options: {
      linkActiveClass: 'is-active',
      linkExactActiveClass: 'is-exact-active',
    }
  }
})
