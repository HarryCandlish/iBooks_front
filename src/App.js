import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home";
import Books from "./components/books/Books";
import { fetchBooks } from "./actions/bookActions";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    this.props.books();
  }
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    books: () => dispatch(fetchBooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
