import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import postcssPxToViewport from 'postcss-px-to-viewport';
import autoprefixer from 'autoprefixer';

const loderPostcssPxToViewport = postcssPxToViewport({
    viewportWidth: 900,
    viewportUnit: 'vw',
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            components: path.resolve(__dirname, 'src/components'),
            views: path.resolve(__dirname, 'src/views'),
            utils: path.resolve(__dirname, 'src/utils'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    build: {
        outDir: 'build',
    },
    css: {
        postcss: {
            plugins: [loderPostcssPxToViewport, autoprefixer],
        },
    },
    server: {
        host:'0.0.0.0'
    }
});
