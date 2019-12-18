import React, { Component } from "react";
import ResultsEntity from "./ResultsEntity";

class ResultsTable extends Component {
  state = {};
  render() {
    return (
      <div>
        <ResultsEntity />
        <ResultsEntity />
      </div>
    );
  }

  componentWillMount() {
    //Making request from api to get all of users created polls
  }
}

export default ResultsTable;
