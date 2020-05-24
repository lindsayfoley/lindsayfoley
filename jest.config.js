module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx|js)?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/__mocks__/setupTests.js"],
  moduleNameMapper: { "^.+\\.(css|scss)$": "<rootDir>/__mocks__/SCSSStub.js" },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
