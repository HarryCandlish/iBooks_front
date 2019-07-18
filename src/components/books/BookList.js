import React, { Component } from "react";
import booksStyles from "../../modules/books.module.scss";

import { connect } from "react-redux";

class Books extends Component {
  render() {
    return (
      <div>
        <h1 className={booksStyles.title}>Books</h1>
        <ol className={booksStyles.container}>
          {this.props.books.map(book => (
            <li className={booksStyles.flexbox} key={book.id}>
              <div className={booksStyles.titleBox}>
                <h2 className={booksStyles.type}>{book.title}</h2>
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

export default connect(mapStateToProps)(Books);
