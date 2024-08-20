import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../redux/slices/app/searchSlice";
import RecentSearches from "./RecentSearches";

export default function Search() {
  const cityName = useRef();
  const dispatch = useDispatch();
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = cityName.current.value.trim();
    if (value) {
      dispatch(searchActions.setSearchedData(value));
      dispatch(recentSearchActions.storeSearch(value));
    }
    setShowRecentSearches(false); // Hide dropdown after search
  };

  return (
    <div className="relative mt-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-4 pb-0 bg-gradient-to-b from-gray-800 to-gray-600 rounded-lg shadow-xl"
      >
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Search City</h2>
            <div className="flex">
              <input
                ref={cityName}
                id="text"
                type="text"
                name="name"
                className="appearance-none block mr-1 w-full bg-gray-700 text-gray-300 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
                onFocus={() => setShowRecentSearches(true)}
                onBlur={() => setTimeout(() => setShowRecentSearches(false), 200)}
              />
              <button
                type="submit"
                className="px-4 py-3 mb-3 bg-teal-800 text-white rounded hover:bg-teal-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      {showRecentSearches && <RecentSearches onClose={() => setShowRecentSearches(false)} />}
    </div>
  );
}
