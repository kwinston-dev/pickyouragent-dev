import { declareSchema, FeatureStatus } from "../featureSetSchema";

export const claudeCode = declareSchema(
  {
    id: "claude-code",
    name: "Claude Code",
  },
  {
    planMode: {
      "dual-model": FeatureStatus.Supported,
    },
    documentation: {
      "filesystem": FeatureStatus.Supported,
      "tree": FeatureStatus.Supported,
      "multi-file": FeatureStatus.NotSupported,
      "llms-txt": FeatureStatus.NotSupported,
      "auto-merge": FeatureStatus.NotSupported,
      "partial": FeatureStatus.NotSupported,
    },
    reasoning: {
      "explanation-in-natural-language": FeatureStatus.PartiallySupported,
      "step-by-step-view": FeatureStatus.NotSupported,
    },
    tools: {
      "search-engine": FeatureStatus.Supported,
      "fetch-data": FeatureStatus.Supported,
    },
  }
);
