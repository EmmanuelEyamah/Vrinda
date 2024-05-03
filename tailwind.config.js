import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        normal: ['Sofia Pro Regular'],
        italic: ['Sofia Pro Italic'],
        extralight: ['Sofia Pro ExtraLight'],
        ultralight: ['Sofia Pro UltraLight'],
        extralightItalic: ['Sofia Pro ExtraLight Italic'],
        ultralightItalic: ['Sofia Pro UltraLight Italic'],
        light: ['Sofia Pro Light'],
        lightItalic: ['Sofia Pro Light Italic'],
        medium: ['Sofia Pro Medium'],
        mediumItalic: ['Sofia Pro Medium Italic'],
        semibold: ['Sofia Pro SemiBold'],
        semiboldItalic: ['Sofia Pro SemiBold Italic'],
        bold: ['Sofia Pro Bold'],
        boldItalic: ['Sofia Pro Bold Italic'],
        black: ['Sofia Pro Black'],
        blackItalic: ['Sofia Pro Black Italic'],
      },
    },
  },
  plugins: [],
};

export default withMT(config);

