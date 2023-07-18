// 一段时间内，执行一次
import { useEffect } from 'react';
import useLatest from '../useLatest';

const index = (fn: () => void, delay?: number): void => {

  const fnRef = useLatest(fn)

  useEffect(() => {
    if (!delay || delay < 0) return;

    const timer = setTimeout(() => {
      fnRef.current();
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])

};

export default index;