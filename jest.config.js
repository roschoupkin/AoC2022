module.exports = {
  verbose: true,
  preset: 'ts-jest',
  displayName: 'AoC2022',
  testMatch: ['**/?(*.)test.ts?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: require.resolve('./tsconfig.jest.json'),
      },
    ],
  },
};
