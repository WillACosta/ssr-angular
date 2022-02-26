module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#FF6582',
        'neutral-light': '#fdfbfb',
        'neutral-medium': '#ebedee'
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
