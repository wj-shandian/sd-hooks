// mock screen full events
// https://github.com/sindresorhus/screenfull/blob/main/index.js
const screenfullMethods = [
  'requestFullscreen',
  'exitFullscreen',
  'fullscreenElement',
  'fullscreenEnabled',
  'fullscreenchange',
  'fullscreenerror',
];
screenfullMethods.forEach((item) => {
  document[item] = () => {};
  HTMLElement.prototype[item] = () => {};
});

// 这段代码的主要作用是创建一个mock环境，拦截对screenfull方法的访问。它是为了开发者在处理全屏功能时，在不影响用户体验的情况下，能够进行相关的测试。
