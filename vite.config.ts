import { defineConfig } from 'vitest/config'; // you have to defined vitest/config to use testing libraries
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: './tests/setup.ts',
        coverage: {
            provider: 'v8',
            include: [
                'src/components/**/*.tsx', // Include all TypeScript files in src/components
                'src/utils/**/*.ts', // Include all TypeScript files in src/utils
            ],
            exclude: [
                'src/**/*.test.tsx', // Exclude all test files
                'src/**/*.test.ts', // Exclude all test files
                '**/node_modules/**', // Standard practice to exclude node_modules
            ],
            reporter: ['text', 'json', 'html'],
        },
    },
});