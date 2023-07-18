// useCreation这个钩子增强了 useMemo 和 useRef，让这个钩子可以替换这两个钩子。
import { useRef } from 'react';

const depsAreSame = (oldDeps: string | any[], deps: any[]): boolean => {
  if (oldDeps === deps) return true

  for (let i = 0; i < oldDeps.length; i++) {
    // 判断两个值是否是同一个值
    if (!Object.is(oldDeps[i], deps[i])) return false
  }

  return true
}

const useCreation = <T>(fn: () => T, deps: any[]) => {

  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false
  })

  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }

  return current.obj as T
}

export default useCreation;