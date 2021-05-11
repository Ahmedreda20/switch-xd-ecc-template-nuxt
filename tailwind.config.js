module.exports = {
    purge: {
        mode: 'layers',
        content: [
            './components/**/*.{vue,js}',
            './layouts/**/*.vue',
            './pages/**/*.vue',
            './plugins/**/*.{js,ts}',
            './nuxt.config.{js,ts}',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'open-sans': ['Open Sans'],
            },
            colors: {
                'very-light-gray': '#F9F9F9',
                'light-gray': '#00000029',
                '33-black': '#333333',
                'dark-gray': '#272727',
                'purple-dark': '#333399',
                orange: '#FF7900',
                'light-green': '#00CC00',
                'dark-gray': '#707070',
                red: '#FF0000',
            },
            fontSize: {
                'very-small-8': '8px',
                'very-small-3': '13px',
                'main-size-6': '16px',
                'main-size-4': '14px',
                'main-size-8': '18px',
                'second-size-1': '21px',
                'second-size-2': '21px',
                'second-size-4': '24px',
                'second-size-7': '27px',
                'second-size-8': '28px',
                'third-size-2': '32px',
                'forth-size-3': '43px',
                'forth-size-4': '43px',
                'forth-size-8': '48px',
                'sixth-size': '60px',
                'seventh-size': '70px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}