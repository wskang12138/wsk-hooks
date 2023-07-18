//示例：
import { Button } from 'antd';
import useUpdate from '../lib/useUpdate';


const Index = (props) => {
  const update = useUpdate();

  return (
    <div style={{ padding: 50 }}>
      <div>时间：{Date.now()}</div>
      <Button type='primary' onClick={update}>更新时间</Button>
    </div>
  );
}

export default Index;