import { createSlice } from "@reduxjs/toolkit";

const initialRecentSearch = {
    recentSearch : []
};
export const recentSlice = createSlice({
    name : 'recentSearch',
    initialState : initialRecentSearch,
    reducers : {
        storeSearch : (state,action)=>{
            if (state.recentSearch.length === 5) {
                state.recentSearch.shift(); // Remove the oldest search (first item)
            }
            if((state.recentSearch.includes(action.payload))){
                const tempArray = state.recentSearch?.filter((item)=>item !== action.payload)
                state.recentSearch = tempArray;
                // state.recentSearch.push(action.payload);
            }
            state.recentSearch.push(action.payload);
            
        }
    }
})

export const recentSearchActions = recentSlice.actions;
export default recentSlice.reducer;