import "./App.css";
import text from "./data/data.js";
import { useState } from "react";
import NumberInput from "./components/NumberInput.js";
function App() {
  const [value, setValue] = useState(1);
  console.log(value);
  const mario = (e) => {
    const target = Number(e.target.value);
    setValue((prev) => {
      prev = target;
      return prev;
    });
  };
  return (
    <>
      <h1 className="text-center w-40 mx-auto py-8 text-xl">Text Render</h1>
      <div className="mx-auto w-[200px]">
        <NumberInput value={value} mario={mario} />
      </div>
    </>
  );
}

export default App;
