import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Sofia Pro" ],
      serif: ["Sofia Pro" ],
      body: ["Sofia Pro" ],
    },
    extend: {
      fontFamily: {
        normal: ['Sofia Pro Regular'],
        italic: ['Sofia Pro Italic'],
        extralight: ['Sofia Pro ExtraLight'],
        ultralight: ['Sofia Pro UltraLight'],
        light: ['Sofia Pro Light'],
        medium: ['Sofia Pro Medium'],
        semibold: ['Sofia Pro SemiBold'],
        bold: ['Sofia Pro Bold'],
        black: ['Sofia Pro Black'],
      },
    },  
  },
  plugins: [],
};

export default withMT(config);

