module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx|js)?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
