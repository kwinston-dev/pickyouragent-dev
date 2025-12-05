import { declareSchema } from '../featureSetSchema';

export const agent = declareSchema({
  id: 'agent-d',
  name: 'Agent D',
  features: {
    planning: {
      'multi-step-planning': 'not-supported',
      'plan-editing': 'not-supported',
      'plan-execution': 'not-supported',
    },
    reasoning: {
      'explanation-in-natural-language': 'supported',
      'step-by-step-view': 'supported',
    },
    tests: {
      'test-generation': 'not-supported',
      'integrates-with-ci': 'not-supported',
      'editor-plugins-available': 'not-supported',
    },
  },
});

