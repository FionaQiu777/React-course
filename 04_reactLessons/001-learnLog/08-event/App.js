const App = () => {
  const clickHandler = (event) => {
    event.preventDefault(); // 取消默认行为
    event.stopPropagation(); // 取消事件的冒泡
    alert("i'm app's clickHandler");
    /* 
      在React中，无法通过return false 取消默认行为

      事件对象
        - React事件中，同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
        - React中的事件对象同样不是原生的事件对象，是经过React包装后的事件对象
        - 由于对象进行过包装，所以使用过程中，我们无需再去考虑兼容性的问题
    */
  };

  return (
    <div
      onClick={() => {
        alert("div");
      }}
      style={{
        width: 400,
        height: 400,
        margin: "100px auto",
        backgroundColor: "pink",
      }}
    >
      {/* 
        在React中时间需要通过元素的属性来设置，
          和原生JS不同，在React中事件的属性需要使用驼峰命名法：
            onclick => onClick
            onchange => onChange
          属性值不能直接执行代码，而是需要一个回调函数：
            onclick = "alert(123)"
            onClick = {() => {alert(123)}}
      */}
      <button>Click me</button>
      <button onClick={clickHandler}>Click clickHandler</button>
      <br />
      <a href="www.baidu.com" onClick={clickHandler}>
        Click clickHandler
      </a>
    </div>
  );
};

export default App;
