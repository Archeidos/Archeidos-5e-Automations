import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.js', // Change this to your actual entry file
            name: 'archeidosAutomations',
            fileName: (format) => `archeidos-automations.${format}.js`
        },
        // You can add further rollupOptions if needed:
        rollupOptions: {
            // external: [...], // list external dependencies if any
        }
    }
});
