import React from 'react';
import './index.less';

const classPrefix = 'PositionStyle';

export default function Position() {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-item`}>item1</div>
      <div className={`${classPrefix}-item`}>item2</div>
      <div className={`${classPrefix}-sticky`}>item3</div>
      <div className={`${classPrefix}-item`}>item4</div>
      <div className={`${classPrefix}-item`}>item5</div>
    </div>
  )

}