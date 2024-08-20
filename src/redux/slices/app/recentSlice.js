import { createSlice } from "@reduxjs/toolkit";

const initialRecentSearch = {
  recentSearch: []
};

export const recentSlice = createSlice({
  name: 'recent',
  initialState: initialRecentSearch,
  reducers: {
    storeSearch: (state, action) => {
      if (state.recentSearch.length === 5) {
        state.recentSearch.shift(); // Remove the oldest search (first item)
      }
      if (state.recentSearch.includes(action.payload)) {
        state.recentSearch = state.recentSearch.filter(item => item !== action.payload);
      }
      state.recentSearch.push(action.payload);
    }
  }
});

export const recentSearchActions = recentSlice.actions;
export default recentSlice.reducer;
