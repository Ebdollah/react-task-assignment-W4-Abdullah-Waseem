import { createSlice } from "@reduxjs/toolkit";


const initialValue = {searchedData : ''}
const searchSlice = createSlice({
    name : 'search',
    initialState : initialValue,
    reducers : {
        setSearchedData : (state, action)=>{
            state.searchedData = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;