import { useEffect, useMemo } from 'react';
import { throttle } from 'lodash-es';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

interface Options {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

type noop = (...args: any[]) => void;

export default function useThrottleFnFn<T extends noop>(fn: T, options: Options) {
  const fnRef = useLatest(fn);
  const wait = options?.wait ?? 1000;

  const throttleFn = useMemo(() => {
    return throttle(
      (...args) => {
        return fnRef.current(...args);
      },
      wait,
      options,
    );
  }, []);

  useUnmount(() => {
    throttleFn.cancel();
  });

  return {
    run: throttleFn,
    cancel: throttleFn.cancel,
    flush: throttleFn.flush,
  };
}
