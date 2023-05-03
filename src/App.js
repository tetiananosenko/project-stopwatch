
import { useState } from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  
  const [showTimer, setShowTimer] = useState(true);
  function clickTimer() {
    setShowTimer(showTimer => !showTimer);
  }

  return (
    <div>
     
      {showTimer ? (<Timer />) : null}
      {/* {showTimer && (<Timer />)} */}
      <button onClick={clickTimer}> CLICK</button>
    </div>


  );
};

export default App;

