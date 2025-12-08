import { declareSchema, FeatureStatus } from "../featureSetSchema";

export const codex = declareSchema(
  {
    id: "codex",
    name: "Codex",
  },
  {
    planMode: {
      "dual-model": FeatureStatus.NotSupported,
    },
    documentation: {
      "filesystem": FeatureStatus.Supported,
      "tree": FeatureStatus.NotSupported,
      "multi-file": FeatureStatus.NotSupported,
      "llms-txt": FeatureStatus.NotSupported,
      "auto-merge": FeatureStatus.NotSupported,
      "partial": FeatureStatus.NotSupported,
    },
    reasoning: {
      "explanation-in-natural-language": FeatureStatus.Supported,
      "step-by-step-view": FeatureStatus.Supported,
    },
    tools: {
      "search-engine": FeatureStatus.Supported,
      "fetch-data": FeatureStatus.NotSupported,
    },
  }
);
