import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice";

const bookStore = configureStore({
    reducer: {
        book: bookSlice
    }
});

export default bookStore;