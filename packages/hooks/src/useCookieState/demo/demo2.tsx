import React from 'react';
import { useCookieState } from 'sd-hooks';

export default function App() {
  const [value, setValue] = useCookieState('useCookieStateUpdater', {
    defaultValue: '0',
  });

  return (
    <>
      <p>{value}</p>
      <button
        type="button"
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) + 1))}
      >
        加 +
      </button>
      <button
        type="button"
        style={{ marginRight: '16px' }}
        onClick={() => setValue((v) => String(Number(v) - 1))}
      >
        减 -
      </button>
      <button type="button" onClick={() => setValue('0')}>
        重置
      </button>

      <div>setState 可以接收函数</div>
    </>
  );
}
