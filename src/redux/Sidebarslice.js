import { createSlice } from "@reduxjs/toolkit";

const Sidebarslice = createSlice({
    name : 'Sidebarslice',
    initialState : {
        isSidebarOn : true
    },
    reducers : {
        toogleSidebar : (state, action) => {
            state.isSidebarOn = action.payload;
        }
    }
})

export const {toogleSidebar} = Sidebarslice.actions;
export default Sidebarslice.reducer; 