import { FETCH_BOOKS } from "./types";

export const fetchBooks = () => dispatch => {
  fetch("/books")
    .then(res => res.json())
    .then(books =>
      dispatch({
        type: FETCH_BOOKS,
        books: books
      })
    );
};
