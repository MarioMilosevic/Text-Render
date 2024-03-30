import "./App.css";
import { text as dataText } from "./data/data.ts";
import { useState, useEffect } from "react";
import NumberInput from "./components/NumberInput.js";
import TextField from "./components/TextField.js";
import Heading from "./components/Heading.js";

function App() {
  const [value, setValue] = useState<number>(1);
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    const slicedArray = dataText.slice(0, value);
    setParagraphs(slicedArray);
  }, [value]);
  
 const changeValue = (e: React.FormEvent<HTMLInputElement>) => {
   const target = e.target as HTMLInputElement; 
   const newValue = Number(target.value); 
   setValue(newValue);
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
