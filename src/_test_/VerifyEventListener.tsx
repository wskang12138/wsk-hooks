import React, { useState, useRef } from 'react';
import useEventListener from '../lib/useEventListener'
import { Button } from 'antd';

const Index = (props) => {

  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [key, setKey] = useState('')
  const ref = useRef(null);

  useEventListener('click', () => setCount(v => v + 1), ref)
  useEventListener('keydown', (ev) => setKey(ev.key));

  return (
    <div style={{ padding: 20 }}>
      <Button type='primary' onClick={() => { setFlag(v => !v) }}>切换 {flag ? 'unmount' : 'mount'}</Button>
      {
        flag && <div>
          <div>数字：{count}</div>
          <button ref={ref} >加1</button>
          <div>监听键盘事件：{key}</div>
        </div>
      }
    </div>
  );
}

export default Index;