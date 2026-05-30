/** @type {import('jest').Config} */

const config = {
  preset: "ts-jest",
  silent: true,
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(next-intl|next|@next)/)"],
};

export default config;
