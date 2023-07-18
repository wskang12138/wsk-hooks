// 具备响应式的 useState
import { useRef } from 'react';
import useUpdate from '../useUpdate';
import useCreation from '../useCreation'

const observer = <T extends Record<string, any>>(initialVal: T, cb: () => void): T => {

  const proxy = new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === 'object' ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
  });

  return proxy;
}

const index = <T extends Record<string, any>>(initialState: T): T => {
  const ref = useRef(initialState);
  const update = useUpdate();

  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);

  return state
};

export default index;