import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/projects/restful-restaurants/frontend/',
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.dev.html",
        },
    }
});
