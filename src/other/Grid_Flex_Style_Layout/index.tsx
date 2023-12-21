/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './index.css'

const classPrefixGrid = 'GridStyle';
const classPrefixFlex = "FlexStyle";


const GridStyle = () => {
  return (
    <div className={classPrefixGrid}>

      {[1,2,3,4,5,6,7,8,9].map(item=>(<div className={`item item-${item}`}>{item}</div>))}
    </div>)
}

const FlexStyle = () => {
  return (
    <div className={classPrefixFlex}>
      {[1,2,3,4,5,6,7,8,9].map(item=>(<div className={`item item-${item}`}>{item}</div>))}
    </div>
  )
}

export default () => (
  <div>
    <h1>GridStyle</h1>
    <GridStyle />
    <h1>FlexStyle</h1>
    <FlexStyle />
  </div>
)