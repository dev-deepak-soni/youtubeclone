import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
    reducer : {
        Search : SearchSlice
    }
})

export default Store;