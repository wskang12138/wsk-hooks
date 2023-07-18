import { Button, message } from 'antd';
import { useState } from 'react';
import useMount from '../lib/useMount';
import useUnmount from '../lib/useUnmount'

const Child = () => {

  useMount(() => {
    message.info('首次渲染')
  });

  useUnmount(() => {
    message.info('组件已卸载')
  })

  return <div>你好，我是wskang</div>
}

const Index = (props) => {
  const [flag, setFlag] = useState(false)

  return (
    <div style={{ padding: 50 }}>
      <Button type='primary' onClick={() => { setFlag(v => !v) }}>切换 {flag ? 'unmount' : 'mount'}</Button>
      {flag && <Child />}
    </div>
  );
}

export default Index;