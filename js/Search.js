import showTranslate from "./ShowWords.js";
import { newElm } from "./utils.js";
import { getWords, setCurrentWord } from "./WordStore.js";

export const SearchBox = () => {
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    if (!value) return;

    const words = getWords();
    const wordObj = words
      .filter((item) => item.word.startsWith(value))
      .slice(0, 5);

    if (wordObj.length == 0) return;

    const word = wordObj[0].word;
    const index = words.findIndex((item) => item.word.includes(word));

    setCurrentWord(index);
    showTranslate();
  };

  const search = newElm(
    "input",
    { type: "text", className: "option text-option" },
    { event: "keyup", func: handleSearch }
  );

  search.placeholder = "Search...";

  return search;
};