/**
 * title: 基础用法
 * desc: 3秒后执行一次。
 */
import React, { useState } from 'react';
import { useTimeout } from 'sd-hooks';

export default () => {
  const [state, setState] = useState(1);
  useTimeout(() => {
    setState(state + 1);
  }, 3000);

  return <div>{state}</div>;
};
