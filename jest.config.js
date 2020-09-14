module.exports = {
  bail: 1,
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: ["<rootDir>/src/components/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  coverageThreshold: {
    "./src/components/**": {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
