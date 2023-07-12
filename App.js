import { useState } from "react";
import "./App.css";

function App() {

  /* 
    This is from https://react.dev/blog/2023/03/16/introducing-react-dev

    creates a variable 'text' and a function 'setText'
    text - stores initial value 'hello'
    setText - used to modify 'text'
  */
  const [text, setText] = useState('hello');

  /*
    Sets 'text' to an empty string. The value is updated on the screen
  */
  function reset() {
    setText("")
  }

  /*
    Modifies 'text' to be the string in the text box
  */
  function changeText(e) {
    setText(e.target.value);
  }

  /*
    This stuff is HTML
  */
  return (
    <div>
      <input value={text} onChange={changeText} />
      <p>You typed: {text}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;