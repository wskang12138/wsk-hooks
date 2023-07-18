// 简单控制倒计时的钩子
import { useState, useEffect, useMemo } from 'react';
import useLatest from '../useLatest';
import dayjs from 'dayjs';

type DTime = Date | number | string | undefined;

interface Options {
  targetDate?: DTime;
  interval?: number;
  onEnd?: () => void;
}

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const calcTime = (time: DTime) => {
  if (!time) return 0

  const res = dayjs(time).valueOf() - new Date().getTime(); //计算差值

  if (res < 0) return 0

  return res
}

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  };
};

const useCountDown = (options?: Options) => {

  const { targetDate, interval = 1000, onEnd } = options || {};

  const [time, setTime] = useState(() => calcTime(targetDate));
  const onEndRef = useLatest(onEnd);

  useEffect(() => {

    if (!targetDate) return setTime(0)

    setTime(calcTime(targetDate))

    const timer = setInterval(() => {
      const target = calcTime(targetDate);

      setTime(target);
      if (target === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, interval);
    return () => clearInterval(timer);
  }, [targetDate, interval])

  const formattedRes = useMemo(() => {
    return parseMs(time);
  }, [time]);

  return [time, formattedRes] as const
};

export default useCountDown;