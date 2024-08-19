import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../redux/slices/app/searchSlice";


function RecentSearches() {
  const dispatch = useDispatch();
  const recentSearchData = useSelector((state) => state.recent.recentSearch);
  const mappedNumbers = [...recentSearchData].reverse();
  const handleRecentSearch = (recent)=> dispatch(searchActions.setSearchedData(recent));
  


  return (
    <div className="absolute top-full left-[358px] w-full max-w-sm mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
      <ul className="p-4">
        {mappedNumbers.length > 0 ? (
          mappedNumbers.map((recent, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRecentSearch(recent)}
            >
              {recent}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No recent searches</li>
        )}
      </ul>
    </div>
  );
}

export default RecentSearches;
