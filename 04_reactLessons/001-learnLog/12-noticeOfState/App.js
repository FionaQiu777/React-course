import "./App.css";
import { useState } from "react";

const App = () => {
  /* 
    state
      - state 实际就是一个被React管理的变量
        当我们通过setState()修改变量的值时，会触发组件的自动重新渲染
      - 只有state值发生变化时，组件才会重新渲染
      - 当state的值时一个对象时，修改时是使用新的对象去替换已有对象
      - 当通过setState去修改一个state时，并不表示修改当前的state
        修改的是组件下一次渲染时，state的值
      - setState()会触发组件的重新渲染，它是异步的
        所以当我们调用setState()需要用旧state的值时，一定要注意
        有可能出现计算错误的情况
        为了避免这种情况，可以通过为setState()传递回调函数的形式来修改state值
  */

  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState({ name: "Peach", age: 18 });

  const addHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
    /* 
      setState() 中回调函数的返回值会成为新的state值
        回调函数执行时，React会将最新的state值作为参数传递
    */
  };

  const updateUserHandler = () => {
    setUser({ ...user, name: "Yee" });
  };

  return (
    <div className={"app"}>
      <h1>
        {counter} -- {user.name} -- {user.age}
      </h1>
      <button onClick={addHandler}>+</button>
      <button onClick={updateUserHandler}>++</button>
    </div>
  );
};

export default App;
