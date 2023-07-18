// 每过一段时间内一直执行
import { useEffect } from 'react';
import useLatest from '../useLatest';

const index = (fn: () => void, delay?: number, immediate?: boolean): void => {

  const fnRef = useLatest(fn)

  useEffect(() => {
    if (!delay || delay < 0) return;
    if (immediate) fnRef.current();

    const timer = setInterval(() => {
      fnRef.current();
    }, delay)

    return () => {
      clearInterval(timer)
    }
  }, [delay])

};

export default index;