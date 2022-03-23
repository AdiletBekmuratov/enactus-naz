import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import shimReactPdf from "vite-plugin-shim-react-pdf";
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  plugins: [react(), shimReactPdf()]
})
