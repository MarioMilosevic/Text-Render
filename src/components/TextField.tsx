type TextFieldTypes = {
  text:string
}
const TextField = ({ text }:TextFieldTypes) => {
  return (
    <article className="w-[560px] border border-red-200 outline mt-4 mx-auto px-4 py-8">
      {text}
    </article>
  );
};

export default TextField;
