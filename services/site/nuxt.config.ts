// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // CSS
  css: [
    '@artdanshin/ui/styles',
    '@/assets/styles/index.scss',
  ],

  // Modules
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],

  // App config
  app: {
    head: {
      title: 'ArtDanshin - Frontend Developer',
      meta: [
        { charset: 'utf8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend разработчик, геймер и стример. Создаю современные веб-приложения и делюсь опытом в статьях.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
      ],
    },
  },

  components: [{
    path: '@/components',
    pathPrefix: false,
    extensions: ['.vue'],
  }],

  // Runtime config
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'http://localhost:3000',
    },
  },

  // Build config
  build: {
    transpile: ['@artdanshin/ui'],
  },

  // Vite config
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/mixins.scss" as *;',
        },
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
});
