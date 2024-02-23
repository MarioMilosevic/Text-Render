const NumberInput = ({value, mario}) => {
  return (
    <>
      <input 
        type="number"
        value={value}
        onInput={mario}
        className="w-full flex justify-center px-2 py-1"
      />
    </>
  );
};

export default NumberInput;
