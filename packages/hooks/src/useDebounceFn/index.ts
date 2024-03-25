import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash-es';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

interface Options {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

type noop = (...args: any[]) => void;

export default function useDebounceFn<T extends noop>(fn: T, options: Options) {
  const fnRef = useLatest(fn);
  const wait = options?.wait ?? 1000;

  const debouncedFn = useMemo(() => {
    return debounce(
      (...args) => {
        return fnRef.current(...args);
      },
      wait,
      options,
    );
  }, []);

  useUnmount(() => {
    debouncedFn.cancel();
  });

  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}
