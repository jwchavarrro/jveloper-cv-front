const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)", "**/*.(test|spec).(js|jsx|ts|tsx)"],
  moduleNameMapper: {
    "^@/components/atomic-desing/atoms/(.*)$": "<rootDir>/components/atomic-desing/atoms/$1",
    "^@/(.*)$": "<rootDir>/$1",
  },
  collectCoverageFrom: [
    "components/atomic-desing/**/*.{js,jsx,ts,tsx}",
    "components/pages/**/*.{js,jsx,ts,tsx}",
    "lib/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!components/ui/**",
    "!app/**",
  ],
  coverageReporters: ["text", "lcov", "html"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
