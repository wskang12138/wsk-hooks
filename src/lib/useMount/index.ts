// 使用 useEffect 实现 componentDidMount功能
import { useEffect } from 'react';

const index = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default index;