import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
       "@pages": path.resolve(__dirname, "./src/pages"),
       "@components": path.resolve(__dirname, "./src/components"),
       "@assets": path.resolve(__dirname, "./src/assets"),
       "@hooks": path.resolve(__dirname, "./src/hooks"),
       "@layout": path.resolve(__dirname, "./src/layout")
    }
  }
})