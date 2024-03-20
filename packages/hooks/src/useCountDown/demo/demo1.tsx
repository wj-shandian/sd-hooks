import React from 'react';
import { useCountDown } from 'sd-hooks';

export default () => {
  const [countdown, formattedRes] = useCountDown({
    targetDate: `${new Date().getFullYear()}-12-31 23:59:59`,
  });
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  return (
    <p>
      距离 {new Date().getFullYear()}-12-31 23:59:59 还有 {days} 天 {hours} 时 {minutes} 分{' '}
      {seconds} 秒 {milliseconds} 毫秒
    </p>
  );
};
