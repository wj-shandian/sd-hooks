import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs: [{ type: 'hooks', dir: './packages/hooks/src' }],
  },
  alias: {
    sdHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['sd-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  publicPath: '/sd-hooks/',
  history: { type: 'hash' },
  themeConfig: {
    name: 'sd-hooks',
    logo: '/sd-hooks/logo.png',
    favicon: '/sd-hooks/logo.png',

    nav: [
      { title: '指南', link: '/guid' },
      {
        title: 'Hooks',
        link: '/hooks/use-mount',
      },
    ],
    sidebar: {
      '/hooks': [
        {
          title: '生命周期',
          children: [
            { title: 'useMount', link: '/hooks/use-mount' },
            { title: 'useUnmount', link: '/hooks/use-unmount' },
          ],
        },
        {
          title: '场景',
          children: [{ title: 'useCountDown', link: '/hooks/use-count-down' }],
        },
        {
          title: '状态',
          children: [
            { title: 'useToggle', link: '/hooks/use-toggle' },
            { title: 'useCookieState', link: '/hooks/use-cookie-state' },
            { title: 'useLocalStorageState', link: '/hooks/use-local-storage-state' },
            { title: 'useSessionStorageState', link: '/hooks/use-session-storage-state' },
          ],
        },
        {
          title: 'dom',
          children: [{ title: 'useTitle', link: '/hooks/use-title' }],
        },
        {
          title: '副作用',
          children: [
            { title: 'useTimeout', link: '/hooks/use-timeout' },
            { title: 'useUpdateEffect', link: '/hooks/use-update-effect' },
            { title: 'useDebounceFn', link: '/hooks/use-debounce-fn' },
            { title: 'useThrottleFn', link: '/hooks/use-throttle-fn' },
          ],
        },
        {
          title: '高级',
          children: [
            { title: 'useLatest', link: '/hooks/use-latest' },
            { title: 'useMemoizedFn', link: '/hooks/use-memoized-fn' },
          ],
        },
      ],
    },
  },
});
