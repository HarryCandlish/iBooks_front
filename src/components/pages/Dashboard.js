import React, { Component } from "react";

import dashStyles from "../../modules/dash.module.scss";

import Books from "./Books";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 className={dashStyles.title}>Harry Candlish</h1>
        <Books />
      </div>
    );
  }
}

export default Dashboard;
