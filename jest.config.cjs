import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  silent: true,
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default config;
