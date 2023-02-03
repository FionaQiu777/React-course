import LogItem from "./LogItem/LogItem.js";
import "./Logs.css";

// 模拟一组从服务器中加载的数据
const logsData = [
  {
    id: "001",
    date: new Date(2022, 10, 20, 19, 30),
    desc: "学习JS 01",
    time: 30,
  },

  {
    id: "002",
    date: new Date(2022, 10, 25, 19, 30),
    desc: "学习JS 02",
    time: 40,
  },

  {
    id: "003",
    date: new Date(2022, 11, 20, 17, 30),
    desc: "学习React 01",
    time: 50,
  },

  {
    id: "004",
    date: new Date(2022, 11, 20, 20, 30),
    desc: "学习React 02",
    time: 60,
  },
];

// 将数据放入JSX中
const logItemDate = logsData.map((item, index) => (
  <LogItem
    // key={index} // 只有确保数据不会发生改变时，才能使用索引
    key={item.id}
    date={item.date}
    desc={item.desc}
    time={item.time}
  />
  // <LogItem {...item} />
));

/* 日志的容器 */
const Logs = () => {
  return (
    <div className="logs">
      {/* 在父组件中,可以直接在子组件中设置属性 */}
      {/*
        <LogItem
        date={new Date(2021, 10, 20, 19, 0)}
        desc={"Learning React"}
        time={"50"}
      />
      <LogItem date={new Date()} desc={"Learning JS"} time={"40"} />
       */}
      {logItemDate}
    </div>
  );
};

export default Logs;
