import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import Sidebarslice from "./Sidebarslice";

const Store = configureStore({
    reducer : {
        Search : SearchSlice,
        Sidebarslice : Sidebarslice 
    }
})

export default Store;