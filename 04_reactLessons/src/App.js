import Logs from "./Components/Logs/Logs.js";
import LogsFrom from "./Components/LogsFrom/LogsFrom.js";
import Card from "./Components/UI/Card/Card.js";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      {/* 引入LogsFrom */}
      <LogsFrom></LogsFrom>
      <Logs />
    </div>
  );
};

export default App;
