import React, { Component } from "react";
import booksStyles from "../../modules/books.module.scss";

import { connect } from "react-redux";

class BooksList extends Component {
  render() {
    return (
      <div>
        <h1 className={booksStyles.title}>My Books</h1>
        <ol className={booksStyles.container}>
          {this.props.books.map(book => (
            <li className={booksStyles.flexbox} key={book.id}>
              <div className={booksStyles.titleBox}>
                <img src={book.image} className={booksStyles.image} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

export default connect(mapStateToProps)(BooksList);
