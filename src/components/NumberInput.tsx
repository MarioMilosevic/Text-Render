const NumberInput = ({value, changeValue}) => {
  return (
    <>
      <input 
        type="number"
        value={value}
        onInput={changeValue}
        className="w-[200px] flex justify-center px-2 py-1 mx-auto"
      />
    </>
  );
};

export default NumberInput;
