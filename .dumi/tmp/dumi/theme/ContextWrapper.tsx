// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/wangjie/mySpace/sd-hooks/node_modules/.pnpm/dumi@2.2.17_@babel+core@7.23.6_@types+node@20.11.5_eslint@7.2.0_jest@29.4.1_prettier@2.8.8_re_kmvipu4kv2rgrmycn66hmtva44/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"sd-hooks","description":"前端hooks库","version":"1.0.0","license":"ISC","author":"汪杰"},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"footer":"Copyright © 2024 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"name":"sd-hooks","logo":"/logo.png","favicon":"/logo.png","nav":[{"title":"指南","link":"/guid"},{"title":"Hooks","link":"/hooks"}],"sidebar":{"/hooks":[{"title":"状态","children":[{"title":"useToggle","link":"/hooks/use-toggle"}]}]}},
      _2_level_nav_available: true,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
