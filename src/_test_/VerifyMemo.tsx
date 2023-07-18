// Test.tsx
import { Button } from 'antd';
import { useState } from 'react';
import usePow from '../lib/usePow';

const Test = (props) => {
  const [flag, setFlag] = useState(true)
  const data = usePow([1, 2, 3])

  return (
    <div>
      <div>数字：{JSON.stringify(data)}</div>
      <Button type='primary' onClick={() => { setFlag((v: any) => !v) }}>切换</Button>
      <div>切换状态：{JSON.stringify(flag)}</div>
    </div>
  );
}

export default Test;