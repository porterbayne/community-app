export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    shopifyApiKey: process.env.SHOPIFY_API_KEY,
    shopifyApiSecret: process.env.SHOPIFY_API_SECRET,
    shopifyAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    shopifyShopDomain: process.env.SHOPIFY_SHOP_DOMAIN,
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailFrom: process.env.EMAIL_FROM,
    redisUrl: process.env.REDIS_URL,
    jwtSecret: process.env.JWT_SECRET,
    
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
      appUrl: process.env.APP_URL || 'http://localhost:3000',
    }
  },

  nitro: {
    experimental: {
      tasks: true
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  build: {
    transpile: ['@tiptap/vue-3', '@tiptap/starter-kit', '@tiptap/extension-placeholder', '@tiptap/extension-link', '@tiptap/extension-image']
  }
})
