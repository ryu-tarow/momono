interface TitleH1Props {
  text: string;
}

interface TitleH2Props {
  text: string;
  color: string;
}

interface TextCategoryProps {
  category: string;
  text: string;
}

export const TitleH1 = ({ text }: TitleH1Props) => {
  return (
    <div className="w-11/12 m-auto">
    <h1 className="text-center border border-pink-500 rounded-2xl mx-1 mb-1 mt-3 p-2 text-pink-500">
      {text}
      </h1>
      </div>
  );
};

export const TitleH2 = ({ text, color }: TitleH2Props) => {
  return (
    <div className="w-11/12 m-auto">
    <h2 className={`text-center mt-2 text-sm p-1 rounded-xl rounded-b-none  sm:text-base sm:p-1 ${color}`}>
      {text}
      </h2>
      </div>
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
