import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* 
  组件
    -React中组件有两种创建方式
      - 函数式组件
          函数式组件就是一个返回JSX的普通
          组件的首字母必须是大写

      - 类组件
*/

// function App() {
//   return <div>Hello React</div>;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

// React组件可以直接通过JSX渲染
root.render(<App />);
