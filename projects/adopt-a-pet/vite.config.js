import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/projects/adopt-a-pet/',
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "index.dev.html",
        },
    }
});
