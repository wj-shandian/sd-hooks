/**
 * title: 用法：设置 wait 时间长一点 然后点击执行 再次点击 取消 或者 立即执行 则函数生效
 * desc: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 *
 */

import { useThrottleFn } from 'sd-hooks';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const { run, flush, cancel } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 5000,
    },
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> count: {value} </p>
      <button type="button" onClick={run}>
        执行
      </button>
      <button type="button" onClick={flush}>
        立即执行
      </button>
      <button type="button" onClick={cancel}>
        取消
      </button>
    </div>
  );
};
