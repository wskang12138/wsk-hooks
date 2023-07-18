import { useState } from 'react';
import useInterval from '../lib/useInterval'
import useTimeout from '../lib/useTimeout'

function VerifyInterval(props) {
  const [n, setN] = useState(0);
  const [t, setT] = useState(0);

  useInterval(() => {
    setN(n + 1);
  }, 1000)

  useTimeout(() => {
    setT(n + 1)
  }, 1000)

  return (
    <div>
      <div>每过一秒加1：{n}</div>
      <div>过一秒加一：{t}</div>
    </div>
  );
}

export default VerifyInterval;