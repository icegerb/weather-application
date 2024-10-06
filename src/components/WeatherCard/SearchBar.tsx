import { useState } from "react";

type Props = {
  setCity: (value: string) => void;
};
const SearchBar = ({ setCity }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex w-full p-1 bg-white rounded-lg lg:w-2/3">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a city"
        className="flex-1 pl-2 focus:outline-none"
      />
      <button
        onClick={() => setCity(searchValue)}
        className="px-4 py-1 text-center text-white bg-purple-900 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
