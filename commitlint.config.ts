/**
 * @file commitlint.config.ts
 * @description Enterprise-grade Commitlint rules for strict commit message enforcement.
 */

import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    /** Allowed commit types */
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [
        "feat", // ✨ New feature
        "fix", // 🐛 Bug fix
        "docs", // 📝 Documentation changes
        "style", // 💅 Formatting (no code change)
        "refactor", // 🔨 Code restructuring
        "perf", // ⚡ Performance improvement
        "test", // 🧪 Adding or updating tests
        "build", // 🏗️ Build system or dependencies
        "ci", // ⚙️ CI/CD config changes
        "chore", // 🔧 Maintenance tasks
        "config", // 🧩 Config changes
        "deps", // 📦 Dependency updates
        "release", // 🚀 Release tags/version bumps
        "revert", // ⏪ Reverting commits
      ],
    ],

    /** Require commit type to always be lowercase */
    "type-case": [RuleConfigSeverity.Error, "always", "lower-case"],

    /** Require a non-empty commit subject */
    "subject-empty": [RuleConfigSeverity.Error, "never"],

    /** Prevent capitalized subject formatting */
    "subject-case": [
      RuleConfigSeverity.Error,
      "never",
      ["start-case", "pascal-case", "upper-case"],
    ],

    /** Maximum commit message header length */
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],

    /** Optional: long body lines allowed but warn after 120 chars */
    "body-max-line-length": [RuleConfigSeverity.Warning, "always", 120],

    /** Optional: footer length warning */
    "footer-max-line-length": [RuleConfigSeverity.Warning, "always", 120],

    /** Optional rule: require scope? disabled (safe default) */
    "scope-empty": [RuleConfigSeverity.Disabled, "never"],
  },
};

export default config;
