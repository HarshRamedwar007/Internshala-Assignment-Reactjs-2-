/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../mockdata";

const bookSlice = createSlice({
    name: "book",
    initialState: {
        books: books,
        categories: [
            {
                id: 1,
                type: "Fiction"
            },
            {
                id: 2,
                type: "Historical Fiction"
            },
            {
                id: 3,
                type: "Mythology"
            },
            {
                id: 4,
                type: "Romance"
            },
            {
                id: 5,
                type: "Dystopian"
            },
            {
                id: 6,
                type: "Classic"
            },
            {
                id: 7,
                type: "Magical Realism"
            },
            {
                id: 8,
                type: "Philosophy"
            },
            {
                id: 9,
                type: "Self-Help"
            },
            {
                id: 10,
                type: "Biography"
            }
        ]
    },
    reducers: {
        getBooks: (state, action) => {
            return state.books;
        },
        addBook: (state, action) => {
            state.books.unshift(action.payload);
        }
    }
});

export const { getBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;