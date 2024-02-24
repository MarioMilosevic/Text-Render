import "./App.css";
import { text as dataText } from "./data/data.ts";
import { useState, useEffect } from "react";
import NumberInput from "./components/NumberInput.js";
import TextField from "./components/TextField.js";
import Heading from "./components/Heading.js";

function App() {
  const [value, setValue] = useState<number>(1);
  const [text, setText] = useState(dataText);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const slicedArray = text.slice(0, value);
    setParagraphs(slicedArray);
  }, [value]);
  
  const changeValue = (e) => {
    const target = Number(e.target.value);
    setValue(target);
  };

  return (
    <>
      <Heading />
      <NumberInput value={value} changeValue={changeValue} />
      {paragraphs.map((paragraph) => {
        return <TextField text={paragraph} key={paragraph} />;
      })}
    </>
  );
}

export default App;
