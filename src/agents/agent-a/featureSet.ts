import { declareSchema } from '../featureSetSchema';

export const agent = declareSchema({
  id: 'agent-a',
  name: 'Agent A',
  features: {
    planning: {
      'multi-step-planning': 'supported',
      'plan-editing': 'supported',
      'plan-execution': 'supported',
    },
    reasoning: {
      'explanation-in-natural-language': 'supported',
      'step-by-step-view': 'supported',
    },
    tests: {
      'test-generation': 'not-supported',
      'integrates-with-ci': 'supported',
      'editor-plugins-available': 'supported',
    },
  },
});

