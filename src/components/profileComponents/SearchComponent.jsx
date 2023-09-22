import { search } from "../../assets/icons";

const SearchComponent = () => {
  return (
    <>
      <div className="w-48 flex justify-start items-center relative">
        <input
          className="text-sm leading-none rounded-full text-left text-gray-600 px-4 py-2 w-full border border-gray-300  outline-none"
          type="text"
          placeholder="Search"
        />
        <img
          src={search}
          className="absolute right-3 z-10 cursor-pointer w-4"
        />
      </div>
    </>
  );
};

export default SearchComponent;
