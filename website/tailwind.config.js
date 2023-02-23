// @ts-check

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 **/
module.exports = {
    mode: 'jit',
    content: [
        './src/sections/**/*.tsx',
        './src/components/**/*.tsx',
        './src/sections/**/*.module.sass',
        './src/components/**/*.module.sass',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'],
                mono: ['var(--font-mono)'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
