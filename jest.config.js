module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx|js)?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/public/__mocks__/setupTests.js"],
  moduleNameMapper: { "^.+\\.(css|scss)$": "<rootDir>/public/__mocks__/SCSSStub.js" },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
