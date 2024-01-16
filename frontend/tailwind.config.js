/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        62: '15.625rem',
        297: '74.375rem',
      },
      colors: {
        primaryPink: '#E03386',
        primarySide: '#220646',
        primaryGreen: '#4FD1C5',
        primaryButton: '#553C9A',
        primaryLogOut: '#15012E',
        primaryItem: '#718096',
        primaryTitle: '#4A5568',
        primaryInput: '#E2E8F0',
        primaryBody: '#F7FAFC',
        primaryTableHeader: '#EDF2F7',
      },
    },
  },
  plugins: [],
};
