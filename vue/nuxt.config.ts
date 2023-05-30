// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildDir: 'nuxt-build',
  alias: {
    '@': '/<rootDir>'
  },
  devServer: {
    port: 5000
  },
  app: {
    baseURL: '/about'
  },
  watchers: {
    rewatchOnRawEvents: true
  }
})
