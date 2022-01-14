module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-img":
          "url(https://www.moncopaincaviste.com/medias/matt-lamers-679346-unsplash-1452.jpg)",      
          
          "home-product": "url(https://v-and-o.com/boutique/183/le-viala.jpg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
