const TextField = ({ changeTexts, text, value }) => {
  console.log(changeTexts(value));
  return (
    <article className="w-[560px] border border-red-200 outline mt-8 mx-auto px-4 py-8">
      {changeTexts(text)}
    </article>
  );
};

export default TextField;
