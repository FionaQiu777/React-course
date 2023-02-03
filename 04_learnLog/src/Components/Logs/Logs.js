import LogItem from "./LogItem/LogItem.js";
import "./Logs.css";

/* 日志的容器 */
const Logs = () => {
  return (
    <div className="logs">
      <LogItem />
    </div>
  );
};

export default Logs;
