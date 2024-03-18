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

const GridItemSetting = () => (
  <div>
    <h1>fr关键字</h1>
    <div style={{
      display: "grid",
      width: '400px',
      gridTemplateColumns: "100px 1fr 2fr",
      gridTemplateRows: "10px",

    }}>
      <div style={{ background: 'red' }}>1/4总大小</div>
      <div style={{ background: 'green' }}>1/3剩余宽度</div>
      <div style={{ background: 'yellow' }}>2/3剩余宽度</div>
    </div>
    <br />
    <h1>minmax关键字</h1>
    <div className='minmax'>
      <div style={{ background: 'red' }}>1/4总大小</div>
      <div style={{ background: 'green' }}>最小宽度为100px，超出100px以后剩余宽度1/3</div>
      <div style={{ background: 'yellow' }}>2/3剩余宽度</div>
    </div>
    <h1>grid-template-arers定义区域</h1>
    <div className='areas'>
      {Array(9).fill(0).map((item, index) => (
        <div className={`item item-${index}`}>item-{index}</div>
      ))}
    </div>
    <h1>grid-auto-rows/columns</h1>
    <div className='grid-auto-rows'>
      {Array.from({ length: 10 }).map((item, index) => (
        <div className={`item item-${index}`}>item-{index}</div>
      ))}
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
    <h1>Grid子项属性</h1>
    <GridItemSetting />
  </div>
)