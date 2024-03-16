/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './index.css'

const classPrefixGrid = 'GridStyle';
const classPrefixFlex = "FlexStyle";


const GridStyle = () => {
  return (
    <div className={classPrefixGrid}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (<div className={`item item-${item}`}>{item}</div>))}
    </div>)
}

const FlexStyle = () => {
  return (
    <div className={classPrefixFlex}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9]
        .map(item => (
          <div className={`item item-${item}`}>
            {item}
          </div>
        ))
      }
    </div>
  )
}

const FlexItemSetting = () => (
  <div>
    <div style={{ display: "flex", width: "200px", background: 'green' }}>
      <div style={{ flexGrow: 1, background: 'yellow', width: "100px" }}>flex-grow:1</div>
    </div>
    <br />
    <div style={{ display: "flex", width: "200px", background: 'blue' }}>
      <div style={{ flexGrow: 0, background: 'yellow', width: "100px" }}>flex-grow:0</div>
    </div>
    <br />
    <div style={{ display: "flex", width: "200px", background: 'green' }}>
      <div style={{ flexShrink: .5, background: 'yellow', width: "300px" }}>flex-shrink:1</div>
    </div>
    <br />
    <div style={{ display: "flex", width: "200px", background: 'blue' }}>
      <div style={{ flexShrink: 0, background: 'yellow', width: "300px" }}>flex-shrink:0</div>
    </div>
    <br />
    <div style={{ display: "flex", width: "200px", background: 'green' }}>
      <div style={{ background: 'blue', width: "300px", flexBasis: '50%' }}>flex-basic:50%</div>
    </div>
    <br />
    <div style={{ display: "flex", width: "200px", background: 'blue' }}>
      <div style={{ background: 'yellow', width: "300px" }}>flex-basic:auto</div>
    </div>
  </div>
)

export default () => (
  <div>
    <h1>GridStyle</h1>
    <GridStyle />
    <h1>FlexStyle</h1>
    <FlexStyle />
    <h1>flex弹性项属性</h1>
    <FlexItemSetting />
  </div>
)