import { defineConfig } from 'vitest/config'; // you have to defined vitest/config to use testing libraries
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: './tests/setup.ts',
    },
});
