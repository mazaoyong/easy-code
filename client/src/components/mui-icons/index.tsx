import React from 'react';
import cx from 'classnames';
import './style.scss';

interface IMuiIcons {
  type: string;
  color?: string;
  className?: string;
  style?: Record<string, any>;
  onClick?: () => void;
}

const MuiIcons: React.FC<IMuiIcons> = (props) => {
  const { type, className = '', style = {}, color, onClick } = props
  return (
    <span className={cx("material-icons", className)} style={{ color, ...style }} onClick={onClick}>
      {type}
    </span>
  )
}

export default MuiIcons