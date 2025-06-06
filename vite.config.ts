
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    cors: false, // Disable CORS to prevent cross-origin access
    hmr: false, // Disable HMR entirely
    // For extra security, consider adding this as well:
    origin: 'http://localhost:8080'
  },
  plugins: [
    react(), // Keep React plugin, HMR is disabled via server config
    mode === 'development' && componentTagger(), // Use without arguments
    // Add visualizer plugin (run `npm run build` to generate report)
    visualizer({ 
      filename: 'bundle-analysis.html', // Output file name
      open: true // Automatically open report in browser after build
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"],
          vendor: [
            "@tanstack/react-query",
            "lucide-react",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-select",
            "@radix-ui/react-progress",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-switch",
            "@radix-ui/react-label",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "date-fns"
          ]
        }
      }
    }
  }
}))
