module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'import/order': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: false },
    ],

    // Allow plusplus only in for loops
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

    // Call out some special dev devDependencies
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.*'] },
    ],

    /**
     * React classes are being replaced by functional components,
     * so strong enforcement over these rules is less necessary
     */
    'react/prop-types': 0,

    // We use prop spreading all the time, and Typescript makes it far safer.
    'react/jsx-props-no-spreading': 0,

    // Missing keys can cause major performance problems
    'react/jsx-key': 2,

    // Material UI uses same props with different casing.
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],

    // Prevent use of Object types in Typescript.
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: 'Use string instead',
          Boolean: 'Use boolean instead',
          Number: 'Use number instead',
          Object: 'Use object instead',
        },
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // unused variables from destructuring arrays/params can be prefixed with _
        varsIgnorePattern: '^_.*',
        ignoreRestSiblings: true,
      },
    ],

    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
  },
};
