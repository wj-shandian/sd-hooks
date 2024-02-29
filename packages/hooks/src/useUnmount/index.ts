import { useEffect } from 'react';
import useLatest from '../useLatest';

export default function useUnmount(fn: () => void) {
  if (typeof fn !== 'function') {
    console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
  }
  const fnRef = useLatest(fn); // 使用 useLatest 可以保证函数是最新函数 而不是旧函数 避免出现一些意外情况
  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
}
