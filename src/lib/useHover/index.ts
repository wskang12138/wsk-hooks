// 监听 DOM 元素是否有鼠标悬停
import { useState } from 'react';
import useEventListener from '../useEventListener';

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}

const useHover = (target: any, options?: Options): boolean => {

  const [flag, setFlag] = useState(false)
  const { onEnter, onLeave } = options || {};

  useEventListener('mouseenter', () => {
    onEnter?.()
    setFlag(true)
  }, target)

  useEventListener('mouseleave', () => {
    onLeave?.()
    setFlag(false)
  }, target)

  return flag
};

export default useHover;