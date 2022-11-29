import { configureStore } from "@reduxjs/toolkit";

import { ItemsReducer } from "./items-Slice";

const global_store = configureStore({
    reducer:{
        items : ItemsReducer
    }
})

export default global_store;