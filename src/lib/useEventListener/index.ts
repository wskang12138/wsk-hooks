// 监听各种事件 （如：监听点击事件、键盘事件、滚动事件等，就是在addEventListener的基础上进行封装）
import { useEffect, useRef } from 'react';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

const depsAreSame = (oldDeps, deps): boolean => {
  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false
  }
  return true
}

const useEffectTarget = (effect: () => void, deps, target: any) => {

  const hasInitRef = useRef(false); // 一开始设置初始化
  const elementRef = useRef([]);// 存储具体的值
  const depsRef = useRef([]); // 存储传递的deps
  const unmountRef = useRef(); // 存储对应的effect

  // 初始化 组件的初始化和更新都会执行
  useEffect(() => {
    const targetElement = 'current' in target ? target.current : window;

    // 第一遍赋值
    if (!hasInitRef.current) {
      hasInitRef.current = true;

      elementRef.current = targetElement;
      depsRef.current = deps;
      unmountRef.current = effect();
      return
    }
    // 校验变值: 目标的值不同， 依赖值改变
    if (elementRef.current !== targetElement || !depsAreSame(deps, depsRef.current)) {
      //先执行对应的函数
      unmountRef.current?.();
      //重新进行赋值
      elementRef.current = targetElement;
      depsRef.current = deps;
      unmountRef.current = effect();
    }
  })

  useUnmount(() => {
    unmountRef.current?.();
    hasInitRef.current = false;
  })
}

const useEventListener = (event: string, handler: (...e: any) => void, target: any = window) => {
  const handlerRef = useLatest(handler);

  useEffectTarget(() => {
    const targetElement = 'current' in target ? target.current : window;

    //  防止没有 addEventListener 这个属性
    if (!targetElement?.addEventListener) return;

    const useEventListener = (event: Event) => {
      return handlerRef.current(event)
    }
    targetElement.addEventListener(event, useEventListener)
    return () => {
      targetElement.removeEventListener(event, useEventListener)
    }
  }, [event], target)
};

export default useEventListener;