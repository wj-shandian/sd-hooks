/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import { useToggle, useUnmount } from 'sd-hooks';
import { message } from 'antd';
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(0);

  useUnmount(() => {
    message.info(`${state}`);
  });

  const callback = () => {
    message.error(`${state}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setState(1);
    });
    return callback;
  }, []);

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
