import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Icons from "vite-plugin-icons";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons(), ssr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src/"),
    },
  },
  exports: {
    ".": {
      import: "./index.esm.js",
      require: "./index.cjs.js",
    },
  },
});
