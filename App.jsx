import { useState } from "react";
function App(){
  const[count,setCount]=useState(0);
  function Increment(value){
    setCount(count+1);
    if(count<0){
      setCount(count-1);
    }
  }
  return(
    <div>
      <h1>This is Countr Components</h1>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
      <button onClick={()=> setCount(count-1)}>decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;