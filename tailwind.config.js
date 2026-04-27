/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // إضافة درجات الأزرق والرمادي الخاصة بنظام Zite ERP
        primary: "#1e293b",
        secondary: "#2563eb",
      }
    },
  },
  plugins: [],
}
