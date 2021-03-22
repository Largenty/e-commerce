module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-img":
          "url(https://www.moncopaincaviste.com/medias/matt-lamers-679346-unsplash-1452.jpg)",      
          
          "home-product": "url(https://shop.pierre-chavin.com/1684-thickbox_default/pierre-0-rouge-sans-alcool.jpg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
