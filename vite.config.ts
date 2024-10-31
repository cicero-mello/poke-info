import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import path from "path"

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
       "@pages": path.resolve(__dirname, "./src/pages"),
       "@components": path.resolve(__dirname, "./src/components"),
       "@assets": path.resolve(__dirname, "./src/assets"),
       "@hooks": path.resolve(__dirname, "./src/hooks"),
       "@layout": path.resolve(__dirname, "./src/layout"),
       "@types": path.resolve(__dirname, "./src/types"),
       "@utils": path.resolve(__dirname, "./src/utils"),
       "@api": path.resolve(__dirname, "./src/api"),
       "@stores": path.resolve(__dirname, "./src/stores"),
       "@style-guide": path.resolve(__dirname, "./src/style-guide")
    }
  }
})
