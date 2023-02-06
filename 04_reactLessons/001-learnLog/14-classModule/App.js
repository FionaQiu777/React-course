import React from "react";
import "./App.css";
import User from "./components/user.js";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <User name="Peach" age={18} gender="女" />
      </div>
    );
  }
}

export default App;
