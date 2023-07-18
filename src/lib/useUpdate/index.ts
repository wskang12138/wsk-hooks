// 强制更新
import { useCallback, useState } from 'react';

const index = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export default index;