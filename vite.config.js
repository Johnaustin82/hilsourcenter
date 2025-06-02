import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})


// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:Johnaustin82/malkystitched.git
// git push -u origin main