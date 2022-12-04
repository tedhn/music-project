import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from "vite-plugin-environment";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react(), EnvironmentPlugin( "all" ) ],
  resolve: {
    alias: [ { find: "@", replacement: path.resolve( __dirname, "src" ) } ],
  },
} )
