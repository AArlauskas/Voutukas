import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "../../components/Styles/CreatePoll.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

class PollCreate extends Component {
  state = {
    answersArray: [],
    answersCount: 2,
    Anonymous: false,
    MultiVote: true,
    AddOptions: true
  };
  render() {
    return (
      <div>
        <h2 id="title">Create a poll</h2>
        <div id="mainForm">
          <h5>Question: </h5>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Your question goes here" />
            </Form.Group>

            <h5>Answers: </h5>

            {this.state.answersArray}

            <Button
              variant="warning"
              id="addOptions"
              onClick={() => {
                this.addAnswer(this.state.answersArray.length);
              }}
            >
              Add an option
            </Button>

            <div id="properties">
              <Button
                id="property"
                variant={this.state.Anonymous ? "success" : "danger"}
                onClick={() =>
                  this.state.Anonymous
                    ? this.setState({ Anonymous: false })
                    : this.setState({ Anonymous: true })
                }
              >
                Anonymous
              </Button>
              <Button
                id="property"
                variant={this.state.MultiVote ? "success" : "danger"}
                onClick={() =>
                  this.state.MultiVote
                    ? this.setState({ MultiVote: false })
                    : this.setState({ MultiVote: true })
                }
              >
                Multi Vote
              </Button>
              <Button
                id="property"
                variant={this.state.AddOptions ? "success" : "danger"}
                onClick={() =>
                  this.state.AddOptions
                    ? this.setState({ AddOptions: false })
                    : this.setState({ AddOptions: true })
                }
              >
                Anyone can add options
              </Button>
            </div>
            <div id="submit">
              <Button id="submit" variant="primary" size="lg" block>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }

  addAnswer = i => {
    let answersArray = [...this.state.answersArray];
    answersArray.push(
      <InputGroup className="mb-3">
        <FormControl
          placeholder={"Answer" + (i + 1)}
          aria-describedby="basic-addon"
        />
        <InputGroup.Append>
          <Button
            variant="outline-danger"
            onClick={() => {
              let temp = [...this.state.answersArray];
              temp.splice(i, 1);
              this.setState({ answersArray: temp });
              console.log(i, " ", temp.length, this.state.answersArray.length);
            }}
          >
            Remove
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
    this.setState({ answersArray });
  };

  componentWillMount = () => {
    let answersArray = [...this.state.answersArray];
    for (let i = 0; i < 3; i++) {
      answersArray.push(
        <InputGroup className="mb-3">
          <FormControl
            placeholder={"Answer" + (i + 1)}
            aria-describedby="basic-addon"
          />
          <InputGroup.Append>
            <Button
              variant="outline-danger"
              onClick={() => {
                let temp = [...this.state.answersArray];
                temp.splice(i, 1);
                this.setState({ answersArray: temp });
                console.log(
                  i,
                  " ",
                  temp.length,
                  this.state.answersArray.length
                );
              }}
            >
              Remove
            </Button>
          </InputGroup.Append>
        </InputGroup>
      );
    }
    this.setState({ answersArray });
  };
}

export default PollCreate;
