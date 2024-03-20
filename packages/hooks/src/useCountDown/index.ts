import { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import useLatest from '../useLatest';

import { isNumber } from '../utils';

type TDate = dayjs.ConfigType;

export interface Options {
  leftTime?: number; // 剩余时间
  targetDate?: TDate; // 目标日期
  interval?: number; // 定时器间隔
  onEnd?: () => void; // 倒计时结束时的回调函数
}
interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const parseMs = (ms: number): FormattedRes => {
  return {
    days: Math.floor(ms / (1000 * 60 * 60 * 24)),
    hours: Math.floor(ms / (1000 * 60 * 60)) % 24,
    minutes: Math.floor(ms / (1000 * 60)) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    milliseconds: Math.floor(ms) % 1000,
  };
};

const calcLeft = (target?: TDate) => {
  // 没有值 直接返回0
  if (!target) {
    return 0;
  }
  // dayjs 处理后 返回值
  const left = dayjs(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
};

export default function useCountDown(options: Options = {}) {
  const { leftTime, targetDate, interval = 1000, onEnd } = options;

  const target = useMemo<TDate>(() => {
    // 判断 leftTime 是否存在
    if ('leftTime' in options) {
      // 是否为数字类型 并且 大于0   当前时间加上 剩余时间
      return isNumber(leftTime) && leftTime > 0 ? Date.now() + leftTime : undefined;
    } else {
      // 返回目标时间
      return targetDate;
    }
  }, [leftTime, targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));
  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);
  const onEndRef = useLatest(onEnd);
  useEffect(() => {
    if (!target) {
      setTimeLeft(0);
      return;
    }
    setTimeLeft(calcLeft(target));
    const timer = setInterval(() => {
      const targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, interval]);
  return [timeLeft, formattedRes];
}
