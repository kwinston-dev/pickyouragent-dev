import { declareSchema, FeatureStatus } from "../featureSetSchema";

export const cursor = declareSchema(
  {
    id: "cursor",
    name: "Cursor",
  },
  {
    planMode: {
      "dual-model": FeatureStatus.NotSupported,
    },
    documentation: {
      "filesystem": FeatureStatus.Supported,
      "tree": FeatureStatus.Supported,
      "multi-file": FeatureStatus.Supported,
      "llms-txt": FeatureStatus.Supported,
      "auto-merge": FeatureStatus.NotSupported,
      "partial": FeatureStatus.Supported,
    },
    tools: {
      "search-engine": FeatureStatus.Supported,
      // https://forum.cursor.com/t/agent-cant-web-search-properly/132658/17
      "fetch-data": FeatureStatus.NotSupported,
    },
  }
);

