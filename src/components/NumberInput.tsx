
type NumberInputType = {
  value: number;
  changeValue:(e: React.FormEvent<HTMLInputElement>) => void;
};

const NumberInput = ({ value, changeValue }:NumberInputType) => {
  return (
    <>
      <input 
        type="number"
        value={value}
        onInput={(e) =>changeValue(e)}
        className="w-[200px] flex justify-center px-2 py-1 mx-auto"
      />
    </>
  );
};

export default NumberInput;
