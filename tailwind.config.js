/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'bolt-gray': '#1e293b',
            'bolt-border': '#334155',
            'bolt-accent': '#64748b',
            'bolt-hover': '#475569',
          },
          fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
