import React from 'react';
import { useCookieState } from 'sd-hooks';

export default function App() {
  const [value, setValue] = useCookieState('useCookieStateOptions', {
    defaultValue: '0',
    path: '/',
    expires: (() => new Date(+new Date() + 10000))(),
  });

  return (
    <>
      <p>{value}</p>
      <button
        type="button"
        style={{ marginRight: 16 }}
        onClick={() =>
          setValue((v) => String(Number(v) + 1), {
            expires: (() => new Date(+new Date() + 10000))(),
          })
        }
      >
        加 + (10s expires)
      </button>
      <button
        type="button"
        style={{ marginRight: 16 }}
        onClick={() =>
          setValue((v) => String(Number(v) - 1), {
            expires: (() => new Date(+new Date() + 10000))(),
          })
        }
      >
        减 - (10s expires)
      </button>
      <button type="button" onClick={() => setValue('0')}>
        重置
      </button>
    </>
  );
}
