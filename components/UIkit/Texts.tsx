interface TitleH1Props {
  text: string;
}

interface TextCategoryProps {
  category: string;
  text: string;
}

export const TitleH1 = ({ text }: TitleH1Props) => {
  return (
    <h1 className="text-center border border-pink-500 rounded-lg m-1 p-2 text-pink-500">
      {text}
    </h1>
  );
};

export const TextCategory = ({ category, text }: TextCategoryProps) => {
  return (
    <li>
      <div className="text-xs text-gray-400">{category}</div>
      <p className="p-2">{text}</p>
    </li>
  );
};
