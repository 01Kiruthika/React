import { useReducer } from 'react'
import './App.css'

let countme = (state, action) => {

  console.log(state, action.type);

  // switch (action.type) {
  //   case "increment":
  //     return state + 1
  //   case "decrement":
  //     return state - 1
  //   case "reset":
  //     return 0

  // }

  switch (action.type) {
    case "increment":
      return { time: state.time + 1 }
    case "decrement":
      return { time: state.time - 1 }
    case "reset":
      return { time: 0 }
  }


}
function App() {
  let init = { count: 0, time: 5 }
  // let init = 0
  const [state, dispatch] = useReducer(countme, init)
  console.log(state.time);


  return (
    <>
      <p>{state.time}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  )
}

export default App
