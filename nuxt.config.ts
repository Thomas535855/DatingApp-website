export default defineNuxtConfig({
  devtools: {enabled: false},
  css: ['~/assets/scss/main.scss', '@material-symbols/font-400/index.css', '@material-symbols/font-600/index.css'],
  compatibilityDate: '2024-09-04',
  app: {
    head: {
      title: 'Dating App | S3-AD',
      meta: [


        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
        {name: 'description', content: 'Created by Stijn Timmermans'},
        {name: 'theme-color', content: '#1A0000'},
        {property: 'og:title', content: 'Dating App | S3-AD'},
        {property: 'og:description', content: 'Created by Stijn Timmermans'},
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
        },
        {rel: 'icon', type: 'image/png', href: '/favicon.png'}
      ]
    }
  },
  runtimeConfig: {
    // @ts-ignore
    ENV: process.env.NUXT_ENV,
    // @ts-ignore
    MAIN_API_URL: process.env.NUXT_MAIN_API_URL,
    public: {
      // @ts-ignore
      ENV: process.env.NUXT_PUBLIC_ENV,
      // @ts-ignore
      MAIN_API_URL: process.env.NUXT_PUBLIC_MAIN_API_URL,
      // @ts-ignore
      WEBSITE_URL: process.env.NUXT_PUBLIC_WEBSITE_URL,
    }
  }
})