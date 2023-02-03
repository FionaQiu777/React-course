import LogItem from "./LogItem/LogItem.js";
import "./Logs.css";

/* 日志的容器 */
const Logs = () => {
  return (
    <div className="logs">
      {/* 在父组件中，可以直接在子组件中设置属性 */}
      <LogItem
        date={new Date(2021, 10, 20, 19, 0)}
        desc={"Learning React"}
        time={"50"}
      />
      <LogItem date={new Date()} desc={"Learning JS"} time={"40"} />
    </div>
  );
};

export default Logs;
