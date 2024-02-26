import React from 'react';
import { useToggle } from 'sdHooks';

export default function Demo1() {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>
  );
}
