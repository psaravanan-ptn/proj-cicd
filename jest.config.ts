import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/.next/",
    "<rootDir>/public/",
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  // preset: 'ts-jest/presets/js-with-babel',
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest',  // Transform ES6 modules
  //   '^.+\\.tsx?$': 'ts-jest',      // Transform TypeScript files
  // },
  testEnvironment: "jsdom",
};

export default config;