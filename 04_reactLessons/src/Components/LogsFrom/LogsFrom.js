import React from "react";
import { useRef } from "react";
import Card from "../UI/Card/Card.js";
import "./LogsFrom.css";

const LogsFrom = () => {
  const descRef = useRef();

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
  };

  /* 
    当表单项发生变化时，获取用户输入的内容
  */
  // 创建一个响应函数，监听表单项的变化
  const descChangeHandler = (e) => {
    // 获取到当前触发事件的对象
    // 事件对象中保存了当前事件触发时的所有信息
    // event.target 执行的是触发事件的对象（DOM对象）
    console.log(e.target.value);
    // 使用原生DOM
    // const desc = document.getElementById("desc");
    // console.log(desc.value);
    // 使用useRef()
    // console.log(descRef.current.value);
  };

  const timeChangeHandler = (e) => {
    console.log(e.target.value);
  };

  // 当表单提交时，汇总表单中的数据
  /* 
    在React中，通常表单不需要自行提交
      而是要通过React提交
  */
  const formSubmitHander = (e) => {
    // 取消表单的默认行为
    e.preventDefault();

    // 获取表单项中的数据、日期、时长
  };

  return (
    <Card className="logs-from">
      <form onSubmit={formSubmitHander}>
        <div className="from-item">
          <label htmlFor="date">日期</label>
          <input onChange={dateChangeHandler} id="date" type={"date"}></input>
        </div>
        <div className="from-item">
          <label htmlFor="desc">内容</label>
          <input
            onChange={descChangeHandler}
            /* ref = { descRef } */
            id="desc"
            type={"text"}
          ></input>
        </div>
        <div className="from-item">
          <label htmlFor="time">时长</label>
          <input onChange={timeChangeHandler} id="time" type={"number"}></input>
        </div>
        <div className="from-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsFrom;
