import MyDate from "./MyDate/MyDate.js";
import "./LogItem.css";

const LogItem = () => {
  return (
    <div>
      <div className="item">
        {/* 日期容器 */}
        <MyDate />
        <div className="content">
          <h2 className="desc">学习React</h2>
          <div className="time">40分钟</div>
        </div>
      </div>
    </div>
  );
};

export default LogItem;
