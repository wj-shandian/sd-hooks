import React, { useState } from 'react';
import { useCountDown } from 'sd-hooks';

export default () => {
  const [targetDate, setTargetDate] = useState<number>();

  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      alert('End of the time');
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setTargetDate(Date.now() + 5000);
        }}
        disabled={countdown !== 0}
      >
        {countdown === 0 ? 'Start Interval' : `Reset After ${Math.round(countdown / 1000)}s`}
      </button>
      <button
        onClick={() => {
          setTargetDate(undefined);
        }}
        style={{ marginLeft: 8 }}
      >
        stop
      </button>
    </>
  );
};
