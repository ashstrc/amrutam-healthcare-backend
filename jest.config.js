export default {
  testEnvironment: "node",

  transform: {},

  testMatch: ["**/tests/**/*.test.js"],

  collectCoverageFrom: ["src/**/*.js", "!src/docs/**", "!src/config/**"],

  coverageDirectory: "coverage",

  verbose: true,
};
