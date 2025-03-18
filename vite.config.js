import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: 'src/module.js', // Change this to your actual entry file
            name: 'archeidosAutomations',
            fileName: (format) => `main.js`
        },
        outDir: 'dist',
        // You can add further rollupOptions if needed:
        rollupOptions: {
            // external: [...], // list external dependencies if any
        }
    }
});
