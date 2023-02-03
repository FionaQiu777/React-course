import "./App.css";

const App = () => {
  /* 
    当点击+ 时，数字增大
    点击 - 时，数字减少
  */
  let counter = 0;
  const addHandler = () => {
    // 点击后，数字+1
    counter++;
  };

  const lessHandler = () => {
    // 点击后，数字-1
    counter--;
  };
  return (
    <div className={"app"}>
      <h1>{counter}</h1>
      <button onClick={lessHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
