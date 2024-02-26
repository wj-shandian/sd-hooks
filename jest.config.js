module.exports = {
  preset: 'ts-jest/presets/js-with-ts', // 预设 处理ts和js文件
  testEnvironment: 'jsdom', // 测试环境是jsdom jsdom模拟浏览器环境
  clearMocks: true, // 在每次测试之前清除@jest库保留的mock。这样可以避免测试之间的相互影响。
  testPathIgnorePatterns: ['/.history/'], // 忽略文件
  modulePathIgnorePatterns: ['<rootDir>/package.json'], //指定要忽略的模块路径。这里忽略了<rootDir>/package.json文件。
  resetMocks: false,
  setupFiles: ['./jest.setup.js', 'jest-localstorage-mock'], // 指定在所有测试之前运行的脚本文件。这里指定了jest.setup.js和jest-localstorage-mock。
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // 指定在每个测试环境（如jsdom）之后运行的脚本文件。这里指定了@testing-library/jest-dom/extend-expect，以提供更多的期望方法。
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }], //指定输入文件的处理方式。这里使用了ts-jest来处理TypeScript文件。
  },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  collectCoverageFrom: [
    '<rootDir>/**/src/**/*.{js,jsx,ts,tsx}',
    '!**/demo/**',
    '!**/example/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/dist/**',
  ],
  transformIgnorePatterns: ['^.+\\.js$'],
};
