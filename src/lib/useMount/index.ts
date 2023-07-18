// 使用 useEffect 实现 componentDidMount功能
import { useEffect } from 'react';

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;