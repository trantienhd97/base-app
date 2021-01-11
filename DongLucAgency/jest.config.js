module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [],
  transform: {
    '^(.*)\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^src\\/(.*)$': '<rootDir>/src/$1',
  },
};
