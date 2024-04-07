import React from 'react';
import { useCookieState } from 'sd-hooks';

export default () => {
  const [message, setMessage] = useCookieState('useCookieStateString');
  return (
    <div>
      <input
        value={message}
        placeholder="请输入关键字"
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: 300 }}
      />
      <div>输入关键字 刷新后 可以发现就是上次输入的值 值已经被保存</div>
    </div>
  );
};
