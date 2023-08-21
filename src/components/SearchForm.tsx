import { FaMicrophone, FaCamera, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

const SearchForm = ({ inputWidth = "520px" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchForTerm = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search-results/${searchTerm}`);
  };

  return (
    <form
      className="flex items-center px-4 bg-greyish_blue dark:bg-slate-800 rounded-3xl text-light_blue"
      style={{
        width: inputWidth,
      }}
      onSubmit={searchForTerm}
    >
      <FaSearch className="text-lg" />
      <input
        className="flex-1 border-none outline-none p-4 bg-transparent placeholder:text-light_blue text-sm placeholder:italic"
        type="text"
        placeholder="Search Something..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex gap-4">
        <FaMicrophone className="text-lg" />
        <FaCamera className="text-lg" />
      </div>
    </form>
  );
};

export default SearchForm;
