module.exports = {
  collectCoverageFrom: ["{src,pages}/**/*.{js,jsx,ts,tsx}"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "\\.css$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|jsx|js|ts)?$",
  testEnvironment: 'jsdom'
};
