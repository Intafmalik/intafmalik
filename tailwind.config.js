/** @type {import('tailwindcss').Config} */

import { animations } from 'framer-motion';

const { createThemes } = require('tw-colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        skillBackground: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',
        boxBg: 'linear-gradient(15deg, #102024, #23272b)',
      },
      colors: {
        bgColor: "#212428",
        textColorgray:"#8892B0",
        textColor:"#c8c8c8", // Removed extra spaces
        textWhite:"#f0f8ff",
        custom:'0 0 15px 15px rgba(0, 0, 0, 0.2)',
        hoverCSS:"#c8c8c8",
        blueColor:"#0000FF",
        bgModal:"#010102",
        redColor:"#ff0000",
        formBTNColor:"#071b6b",
        bodyColor:"#212428",
        lightText:"#c4cfde",
        designColor:"#ff014f",
        bgBlack:"#000000",
        gray: {
          300: '#d1d5db', // This is gray-300
        },
        
        'primary-color': 'var(--primary-color)',
        
        // LightMode
        bgblack900:"#f2f2fc",
        bgblack100:"#fdf9ff",
        bgblack50:"#e8dfec",
        textblack900:"#302e4d",
        textblack700:"#504e70",
        skincolor:"#ec1839",

      },
      border:{
        primary:"var(--primary-color)"
      },
      animation: {
        spinSlow: 'spin 2s linear infinite',
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowlight: "0px 0px 15px #2a2d31, 0px 0px 3px #32363a",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    createThemes({
      red:{
        primary:'#ff0000'
      },
      green:{
        primary:'#00ff00'
      },
      blue:{
        primary:'#0000FF'
      },
      purple:{
        primary:' #f700ff '
      },
      aqua:{
        primary:' #00f0ff '
      },
      yellow:{
        primary:' #fff700 '
      }
    })
  ],
  darkMode:"class",
};
