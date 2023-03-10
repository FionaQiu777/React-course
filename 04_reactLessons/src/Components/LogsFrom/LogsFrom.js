import React, { useState } from "react";
import { useRef } from "react";
import Card from "../UI/Card/Card.js";
import "./LogsFrom.css";

const LogsFrom = () => {
  const descRef = useRef();

  /* 
    当表单项发生变化时，获取用户输入的内容
  */
  // 创建三个变量，用来存储表单中的数据
  // let inputDate = "";
  // let inputDesc = "";
  // let inputTime = 0;
  // const [inputDate, setInputDate] = useState("");
  // const [inputDesc, setInputDesc] = useState("");
  // const [inputTime, setInputTime] = useState("");

  // 将表单数据统一到一个state中
  const [formData, setFormData] = useState({
    inputDate: "",
    inputDesc: "",
    inputTime: "",
  });

  // 创建一个响应函数，监听表单项的变化

  const dateChangeHandler = (e) => {
    // setInputDate(e.target.value);
    setFormData({ ...formData, inputDate: e.target.value });
  };

  const descChangeHandler = (e) => {
    // 获取到当前触发事件的对象
    // 事件对象中保存了当前事件触发时的所有信息
    // event.target 执行的是触发事件的对象（DOM对象）
    setFormData({ ...formData, inputDesc: e.target.value });
    // 使用原生DOM
    // const desc = document.getElementById("desc");
    // console.log(desc.value);
    // 使用useRef()
    // console.log(descRef.current.value);
  };

  const timeChangeHandler = (e) => {
    setFormData({ ...formData, inputTime: e.target.value });
  };

  // 当表单提交时，汇总表单中的数据
  /* 
    在React中，通常表单不需要自行提交
      而是要通过React提交
  */
  const formSubmitHander = (e) => {
    // 取消表单的默认行为
    e.preventDefault();
    // 获取表单项中的数据、日期、内容、时长
    // 将数据拼装为一个对象
    const newLog = {
      date: new Date(formData.inputDate),
      desc: formData.inputDesc,
      time: +formData.inputTime,
    };

    // 清空表单项
    setFormData({
      inputDate: "",
      inputDesc: "",
      inputTime: "",
    });
    console.log(newLog);

    /* 
      提交表单后，如何清空表单中的旧数据
        现在这种表单，在React我们称为非受控组件
        
      我们可以将表单中的数据存储到state中，
        然后将state设置为表单项value值，
        这样当表单项发生变化，state会随之变化，
        反之，state发生变化，表单项也会跟着改变，
        这种操作我们就称为双向绑定
        这样一来，表单就成为了一个受控组件
    */
  };

  return (
    <Card className="logs-from">
      <form onSubmit={formSubmitHander}>
        <div className="from-item">
          <label htmlFor="date">日期</label>
          <input
            onChange={dateChangeHandler}
            value={formData.inputDate}
            id="date"
            type={"date"}
          ></input>
        </div>
        <div className="from-item">
          <label htmlFor="desc">内容</label>
          <input
            onChange={descChangeHandler}
            /* ref = { descRef } */
            value={formData.inputDesc}
            id="desc"
            type={"text"}
          ></input>
        </div>
        <div className="from-item">
          <label htmlFor="time">时长</label>
          <input
            onChange={timeChangeHandler}
            value={formData.inputTime}
            id="time"
            type={"number"}
          ></input>
        </div>
        <div className="from-btn">
          <button>添加</button>
        </div>
      </form>
    </Card>
  );
};

export default LogsFrom;
