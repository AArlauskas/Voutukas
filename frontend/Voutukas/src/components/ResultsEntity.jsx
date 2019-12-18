import React, { Component } from "react";
import "./Styles/ResultsEntity.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
class ResultsEntity extends Component {
  state = {
    pollCreator: "tempNameAndSurname",
    createdAt: "tempDateAndTime",
    channel: "tempChannel",
    question: "Question goes here",
    anwsers: [
      {
        answer: "tempQuestion1",
        voters: ["voter1 ", "voter2 "],
        progress: 60
      },
      {
        answer: "tempQuestion2",
        voters: ["voter1 ", "voter2 ", "voter4 "],
        progress: 30
      },
      {
        answer: "tempQuestion3",
        voters: [],
        progress: 20
      }
    ],
    properties: {
      Anonymous: false,
      MultiVote: true,
      AddOptions: true
    }
  };

  render() {
    return (
      <div>
        <div id="head">
          <h4>Poll Creator: {this.state.pollCreator}</h4>
          <h4 id="timeDate">Created at: {this.state.createdAt}</h4>
          <h4 id="channel">Channel: {this.state.channel}</h4>
        </div>
        <div id="question">
          <p>
            <b>{this.state.question}</b>
          </p>
        </div>
        <div id="answers">
          <ul>
            {this.state.anwsers.map(({ answer, voters, progress }) => {
              return (
                <li>
                  {answer}
                  <ProgressBar
                    id="bar"
                    now={progress}
                    label={`${progress}%`}
                    animated={true}
                  />
                  <div id="voters">
                    People who have voted:
                    <span>{voters}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div id="properties">
            <Badge
              id="property"
              pill
              variant={this.state.properties.Anonymous ? "success" : "danger"}
            >
              Anonymous
            </Badge>
            <Badge
              id="property"
              pill
              variant={this.state.properties.MultiVote ? "success" : "danger"}
            >
              Multi Vote
            </Badge>
            <Badge
              id="property"
              pill
              variant={this.state.properties.AddOptions ? "success" : "danger"}
            >
              Anyone can add options
            </Badge>
          </div>
          <hr />
        </div>
      </div>
    );
  }
  componentWillMount() {
    //assigning values
  }
}

export default ResultsEntity;
