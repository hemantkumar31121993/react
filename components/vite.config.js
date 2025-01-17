import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: /\.(jsx|tsx)$/,
            babel: {
                plugins: ['styled-components'],
                babelrc: false,
                configFile: false,
            },
        }),
    ],
    base: '/react/',
})
