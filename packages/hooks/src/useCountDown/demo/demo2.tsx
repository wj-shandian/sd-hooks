import React from 'react';
import { useCountDown } from 'sd-hooks';

const App: React.FC = () => {
  const [countdown] = useCountDown({ leftTime: 60 * 1000 });
  return <p>{countdown}</p>;
};

export default App;
