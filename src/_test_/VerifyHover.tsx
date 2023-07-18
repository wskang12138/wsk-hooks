import { useRef } from 'react';
import useHover from '../lib/useHover';

function VerifyHover(props) {

  const r = useRef(null)

  const h = useHover(r, {
    onEnter: () => {
      console.log('onEnter');
    },
    onLeave: () => {
      console.log('onLeave');
    },
  })


  return (
    <div>
      <div ref={r} style={{ background: '#f00' }}>
        鼠标是否移入：
        {h ? '是' : '否'}
      </div>
    </div>
  );
}

export default VerifyHover;