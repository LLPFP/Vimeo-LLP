import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src"), // Mantienes 'src' como root si es necesario
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // Cambia esto a una ruta absoluta fuera de 'src'
    emptyOutDir: true, // Limpia el directorio de salida antes de construir
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
