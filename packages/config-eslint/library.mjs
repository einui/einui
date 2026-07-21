import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export const libraryConfig = defineConfig([
  ...tseslint.configs.recommended,
  globalIgnores(["dist/**", "node_modules/**"]),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
