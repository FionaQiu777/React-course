import React from "react";

class User extends React.Component {
  /* 
    类组件的props是存储到类的实例对象中的
    可以直接通过实例对象访问
    this.props

    类组件中state统一存储到了实例对象的state属性中
      可以通过 this.state来访问
      通过this.setState()对其进行修改
      当我们通过this.setState()修改state时，
      React只会修改设置了的属性

    函数组件中，响应函数直接以函数的形式定义在组件中，
      但是在类组件中，响应函数是以类的方法来定义的，之前的属性都会保留
      但是这仅限于直接存储于state中的属性

    获取DOM对象
      1. 创建一个属性，用来存储DOM对象
          divRef = React.createRef();
      2. 将这个属性设置为指定元素的ref值
  */

  // 创建属性来存储DOM对象
  divRef = React.createRef();

  // 向state当中添加属性
  state = {
    count: 0,
  };

  // 为了省事，在类组件中响应函数都应该以箭头函数的形式定义
  clickHander = () => {
    // this.setState({ count: this.state.count + 1 });
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1,
    //   };
    // });
    console.log(this.divRef.current);
  };

  render() {
    return (
      <div ref={this.divRef}>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHander}>+</button>
        <ul>
          <li>name:{this.props.name}</li>
          <li>age:{this.props.age}</li>
          <li>gender:{this.props.gender}</li>
        </ul>
      </div>
    );
  }
}

export default User;
