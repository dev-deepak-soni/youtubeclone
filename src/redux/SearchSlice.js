import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : 'SearchSlice',
    initialState : {

    },reducers : {
        sotreCache : (state, action) => {
            state = Object.assign(state, action.payload)
        }
    },
});

export const {sotreCache} = SearchSlice.actions;
export default SearchSlice.reducer;