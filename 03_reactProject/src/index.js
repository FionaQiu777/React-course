// scr/index.js 是js的入口文件
// 引入ReactDOM
import ReactDOM from "react-dom/client";

// 创建一个JSX
const App = (
  <div>
    <h1>this is a react project</h1>
    <p>i have a react project</p>
  </div>
);

// 获取一个根容器
const root = ReactDOM.createRoot(document.getElementById("root"));

// 将App渲染进根容器
root.render(App);
