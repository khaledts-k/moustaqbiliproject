/* Tailwind settings for the whole site (used to live in a <script> on every page).
 * After changing classes in any page or script, rebuild assets/css/tailwind.css (see README).
 */
module.exports = {
  // Files Tailwind reads to find the classes we use. app.js and layout.js build HTML too.
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f6f3',
          100: '#e5ebe3',
          200: '#cbd7c7',
          300: '#a8bfa2',
          400: '#7e9e76',
          500: '#556b2f',
          600: '#476340',
          700: '#384f33',
          800: '#2d3e29',
          900: '#222d1d',
          950: '#141c12',
        }
      }
    }
  }
}
