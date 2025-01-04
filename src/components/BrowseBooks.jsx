/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BrowseBooks() {
    const { category } = useParams("category");
    const allBooks = useSelector((state) => state.book.books);
    const categories = useSelector((state) => state.book.categories);
    const [books, setBooks] = useState(allBooks);
    const [filteredBooks, setFilteredBooks] = useState(books);
    const [bookInput, setBookInput] = useState("");

    useEffect(() => {
        const updatedBooks = allBooks?.filter(book => {
            if (category === "all" || book?.category.toLowerCase() === category) {
                return book;
            }
        });
        console.log("updatedBooks", updatedBooks);

        setBooks(updatedBooks);
        setFilteredBooks(updatedBooks);
    }, [category]);

    useEffect(() => {
        // To Scroll the page to top
        window.scrollTo(0, 0);
    }, []);

    function searchBook(e) {
        const updatedBooks = books?.filter(book => {
            const bookTitle = book?.title?.toLowerCase();
            const bookAuthor = book?.author?.toLowerCase();
            const toCompareWith = bookInput.toLowerCase();

            if (bookTitle.includes(toCompareWith) || bookAuthor?.includes(toCompareWith)) {
                return book;
            }
        });
        console.log("Search: ", updatedBooks);
        setFilteredBooks(updatedBooks);
        setBookInput("");
    }

    return (
        <section className="min-h-[488px] flex flex-col items-center mt-7">
            <h1 className="text-3xl font-semibold italic">Your Perfect Book is Just a Search Away!</h1>
            <article className="mt-7 flex items-center">
                <input
                    value={bookInput}
                    onChange={(e) => setBookInput(e.target.value)}
                    type="text"
                    className="min-w-[500px] ps-4 pe-3 py-2 text-lg font-semibold rounded-s-full outline-none border-blue-900 border-2"
                    placeholder="Search by Book Name or Author Name"
                />
                <button
                    onClick={searchBook}
                    className="bg-sky-900 text-white font-semibold text-lg px-5 py-[10px] rounded-e-full"
                >
                    Search
                </button>
            </article>
            <section className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-14">
                {
                    filteredBooks.length ?
                        (
                            filteredBooks?.map(book => {
                                return <BookCard key={book?.id} book={book} />;
                            })
                        )
                        :
                        (
                            <h1 className="text-black font-semibold text-3xl">No Books Available!</h1>
                        )
                }
            </section>
        </section>
    );
}

export default BrowseBooks;