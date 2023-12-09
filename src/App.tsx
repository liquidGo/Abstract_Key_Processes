// @ts-nocheck
import "./react_patterns/styles.css";
import Patterns_RenderProps from "./react_patterns/01_RenderProps.jsx";
import Patterns_PropGetters from './react_patterns/03_PropGetters'
import Patterns_CompoundComponent from "./react_patterns/02_CompoundComponent";
import Components_Demo_Form from "./components/form/demo";
import Other_Demo_Animation from "./other/animation/animation";
import Other_Demo_DiffSetState from "./other/diffrence_between_setState_and_forceUpdate";
import { decorator } from "./server_nest_tips/decorator";

// 装饰器语法
decorator.log();

export default function App() {
  return (
    <div className="App">
      {/* <Patterns_RenderProps /> */}
      <Patterns_PropGetters/>
      {/* <Patterns_CompoundComponent /> */}
      {/* <Other_Demo_Animation /> */}
      {/* <Other_Demo_DiffSetState /> */}
      {/* <Components_Demo_Form /> */}
    </div>
  );
}
