import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
            { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) }
        ]
    }
});
