// const App = () => {
//   return <div>i'm app modules</div>;
// };

/* 
  类组件必须要继承React.Component
*/
import React from "react";
class App extends React.Component {
  /* 
    类组件中，必须添加一个render()方法，且方法的返回值要是一个JSX
      相较于函数组件，类组件的编写要麻烦一些
      但他俩的功能是一样的

  */
  render() {
    return <div>i'm a class module</div>;
  }
}

// 导出App
export default App;
