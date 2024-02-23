import "./App.css";
import text from "./data/data.js";
import { useState } from "react";
import NumberInput from "./components/NumberInput.js";
import TextField from "./components/TextField.js";
import Heading from "./components/Heading.js";
function App() {
  const [value, setValue] = useState(1);
  console.log(value);
  const changeValue = (e) => {
    const target = Number(e.target.value);
    setValue((prev) => {
      prev = target;
      return prev;
    });
  };
  return (
    <>
      <Heading />
      <NumberInput value={value} changeValue={changeValue} />
      <TextField />
    </>
  );
}

export default App;
