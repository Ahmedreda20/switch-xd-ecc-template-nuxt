export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'switch',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            // twitter seo meta tags
            { hid: 'twitter:image', name: 'twitter:image', content: '' },
            { hid: 'twitter:image:src', name: 'twitter:image:src', content: '' },
            { hid: 'twitter:site', name: 'twitter:site', content: '' },
            { hid: 'twitter:card', name: 'twitter:card', content: '' },
            { hid: 'twitter:description', name: 'twitter:description', content: '' },
            { hid: 'twitter:title', name: 'twitter:title', content: '' },
            // facebook open graph seo meta tags
            { hid: 'og:type', property: 'og:type', content: '' },
            { hid: 'og:site_name', property: 'og:site_name', content: '' },
            { hid: 'og:locale', property: 'og:locale', content: '' },
            {
                hid: 'og:locale:alternate',
                property: 'og:locale:alternate',
                content: '',
            },
            { hid: 'og:url', property: 'og:url', content: '' },
            { hid: 'og:title', property: 'og:title', content: '' },
            { hid: 'og:description', property: 'og:description', content: '' },
            { hid: 'og:image', property: 'og:image', content: '' },
            { hid: 'og:', property: 'og:', content: '' },
            { hid: 'name', itemprop: 'name', content: '' },
            // itemprop seo meta tags
            { hid: 'url', itemprop: 'url', content: '' },
            { hid: 'author', itemprop: 'author', content: '' },
            { hid: 'image', itemprop: 'image', content: '' },
            { hid: 'description', itemprop: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ],
        },
    },

    // loading
    loading: '~/components/loadingComponent.vue',
}