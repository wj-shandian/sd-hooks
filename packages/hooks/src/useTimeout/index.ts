import { useEffect, useRef, useCallback } from 'react';
import useMemoizedFn from '../useMemoizedFn';
import { isNumber } from '../utils';

function useTimeout(fn: () => void, delay?: number) {
  let timeoutRef = useRef<NodeJS.Timer | null>(null);
  // 持久化函数
  const timerCallback = useMemoizedFn(fn);
  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);
  useEffect(() => {
    if (!isNumber(delay) || delay < 0) {
      return;
    }
    timeoutRef.current = setTimeout(timerCallback, delay);
    return clear;
  }, [delay]);
}

export default useTimeout;
