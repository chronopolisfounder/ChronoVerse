export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.(test|spec).[jt]s?(x)'],
}
