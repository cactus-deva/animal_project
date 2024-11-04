// import { AnimalShow } from "./AnimalShow"
import { useState } from "react"

function App () {
  const [count, setCount] = useState(0)  
  const handleClick = () => {
    setCount(count + 10)
  }  

  return (<div>
    <button onClick={handleClick}>Add Animal</button>
    <div>Count is {count}</div>
  </div>)
}

export default App