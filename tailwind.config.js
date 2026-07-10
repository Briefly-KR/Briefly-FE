/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular'],
        display: ['Pretendard-SemiBold'],
        'pretendard-thin': ['Pretendard-Thin'],
        'pretendard-extralight': ['Pretendard-ExtraLight'],
        'pretendard-light': ['Pretendard-Light'],
        pretendard: ['Pretendard-Regular'],
        'pretendard-medium': ['Pretendard-Medium'],
        'pretendard-semibold': ['Pretendard-SemiBold'],
        'pretendard-bold': ['Pretendard-Bold'],
        'pretendard-extrabold': ['Pretendard-ExtraBold'],
        'pretendard-black': ['Pretendard-Black'],
      },
    },
  },
  plugins: [],
};
