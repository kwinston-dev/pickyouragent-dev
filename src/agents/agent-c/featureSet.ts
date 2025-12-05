import { declareSchema } from '../featureSetSchema';

export const agent = declareSchema({
  id: 'agent-c',
  name: 'Agent C',
  features: {
    planning: {
      'multi-step-planning': 'not-supported',
      'plan-editing': 'supported',
      'plan-execution': 'supported',
    },
    reasoning: {
      'explanation-in-natural-language': 'not-supported',
      'step-by-step-view': 'supported',
    },
    tests: {
      'test-generation': 'supported',
      'integrates-with-ci': 'not-supported',
      'editor-plugins-available': 'supported',
    },
  },
});

