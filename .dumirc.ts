import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs: [{ type: 'hooks', dir: './packages/hooks/src' }],
  },
  hash: true,
  alias: {
    sdHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['sd-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  publicPath: '/sd-hooks/',
  themeConfig: {
    name: 'sd-hooks',
    logo: '/logo.png',
    favicon: '/logo.png',

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
          title: '状态',
          children: [{ title: 'useToggle', link: '/hooks/use-toggle' }],
        },
      ],
    },
  },
});
