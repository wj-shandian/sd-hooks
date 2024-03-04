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
        link: '/hooks',
      },
    ],
    sidebar: {
      '/hooks': [
        {
          title: '生命周期',
          children: [{ title: 'useUnmount', link: '/hooks/use-unmount' }],
        },
        {
          title: '状态',
          children: [{ title: 'useToggle', link: '/hooks/use-toggle' }],
        },
        {
          title: 'dom',
          children: [{ title: 'useTitle', link: '/hooks/use-title' }],
        },
        {
          title: '高级',
          children: [{ title: 'useLatest', link: '/hooks/use-latest' }],
        },
      ],
    },
  },
});
