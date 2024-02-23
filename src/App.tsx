import "./App.css";
import text from "./data/data.js";
import { useState } from "react";
import NumberInput from "./components/NumberInput.js";
import TextField from "./components/TextField.js";
import Heading from "./components/Heading.js";
function App() {
  const [value, setValue] = useState(1);
  const [texts, setTexts] = useState(text);

  const changeValue = (e) => {
    const target = Number(e.target.value);
    setValue(target);
  };

  const changeTexts = (value) => {
    const slicedArray = texts.slice(0, value);
    console.log(slicedArray);
    return slicedArray;
  };


  // [0,1,2,3,4,5,6,7,8]
  // ako je value 1 vrati 0 ako je value 5 vrati prva 4 ako je 9 vrati prvih 8
  return (
    <>
      <Heading />
      <NumberInput value={value} changeValue={changeValue} />
      <TextField changeTexts={() => changeTexts(value)} text={text} value={value} />
    </>
  );
}

export default App;
