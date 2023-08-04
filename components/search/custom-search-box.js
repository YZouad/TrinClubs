// .components/Search/CustomSearchBox.js

import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }) {
  return (
    <form action="" role="search">
     <div className="flex flex-col text-white text-4xl">
      <label className="sr-only" htmlFor="algolia_search">Search Clubs, Category, and Members</label>
      <input
      className="h-16 bg-transparent text-white text-base md:text-2xl"
        id="algolia_search"
        type="search"
        placeholder="Search Clubs, members and more..."
        onChange={(e) => refine(e.currentTarget.value)}
      />
      </div>
    </form>
  );
}

export default connectSearchBox(SearchBox);