function SearchBar() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 bg-white w-full md:ml-10 mt-5">
      <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
      <input
        className="flex-1 outline-none bg-transparent text-sm"
        placeholder="Search images, ideas, or keywords..."
      />
    </div>
  );
}


export default SearchBar;