import React, { useContext } from 'react';
import './style.scss';
import { StoreContext } from '../../App'
import { Button } from 'antd'
import { useObserver } from 'mobx-react-lite'

const HeaderBlock: React.FC = () => {
  const store = useContext(StoreContext)
  return useObserver(() => (
    <div className="header-block">
      <Button onClick={() => store.increaseTimer()}>
        {store.secondsPassed}
      </Button>
    </div>
  ))
}

export default HeaderBlock;