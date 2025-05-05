// tailwind.config.js
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ 클래스 탐색 범위 정확히 지정
  ],
  theme: { extend: {} },
  plugins: [],
};
