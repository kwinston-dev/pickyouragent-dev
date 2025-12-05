import { declareSchema } from '../featureSetSchema';

export const agent = declareSchema({
  id: 'agent-b',
  name: 'Agent B',
  features: {
    planning: {
      'multi-step-planning': 'not-supported',
      'plan-editing': 'not-supported',
      'plan-execution': 'supported',
    },
    reasoning: {
      'explanation-in-natural-language': 'partially-supported',
      'step-by-step-view': 'not-supported',
    },
    tests: {
      'test-generation': 'supported',
      'integrates-with-ci': 'supported',
      'editor-plugins-available': 'not-supported',
    },
  },
});

