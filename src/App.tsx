/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
// @ts-nocheck
import "./react_patterns/styles.css";
import Patterns_RenderProps from "./react_patterns/01_RenderProps.jsx";
import Patterns_CompoundComponent from "./react_patterns/02_CompoundComponent";
import Patterns_PropGetters from './react_patterns/03_PropGetters'
import Patterns_StateReducer from './react_patterns/04_StateReducer';
import Patterns_ControlledProps from './react_patterns/05_ControlProps';
import Components_Demo_Form from "./components/form/demo";
import Other_Demo_Animation from "./other/animation/animation";
import Other_Demo_Blob from "./other/whatIsBinaryObject/01_Blob";
import Other_Demo_DiffSetState from "./other/diffrence_between_setState_and_forceUpdate";
import Other_Demo_Style_Layout from './other/Grid_Flex_Style_Layout'
import Other_useMemo_useCallback from "./other/useMemo&useCallback";
import Other_iframe from "./other/iframe";
import './server_nest_tips/decorator'; //装饰器语法


export default function App() {
  return (
    <div className="App">
      {/* <Patterns_RenderProps /> */}
      {/* <Patterns_PropGetters/> */}
      {/* <Patterns_CompoundComponent /> */}
      {/* <Patterns_StateReducer /> */}
      {/* <Patterns_ControlledProps /> */}

      {/* <Other_Demo_Animation /> */}
      {/* <Other_Demo_DiffSetState /> */}
      {/* <Other_Demo_Blob/> */}
      {/* <Other_Demo_Style_Layout /> */}
      {/* <Other_useMemo_useCallback /> */}
      <Other_iframe />

      {/* <Components_Demo_Form /> */}
    </div>
  );
}
