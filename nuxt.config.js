module.exports = {
    mode: 'universal',

    head: {
        titleTemplate: '%s',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: '/css/index.css'}
        ]
    },

    loading: {color: '#fff'},

    css: [],

    plugins: [
        {src: '@/plugins/socket', ssr: false}
    ],

    buildModules: [],

    modules: [],

    build: {
        extend(config, ctx) {
        }
    }
}
