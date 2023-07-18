// 使用useEffect 实现 componentWillUnmount 功能
import { useEffect, useRef } from 'react';

const index = (fn: () => void) => {

  const ref = useRef(fn);
  ref.current = fn;

  useEffect(
    () => () => {
      fn?.()
    },
    [],
  );
};

export default index;