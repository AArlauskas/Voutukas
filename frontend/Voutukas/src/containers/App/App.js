import React, { Component } from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Axios from "axios";

import Home from "../Home/Home";
import PollCreate from "../PollCreate/PollCreate";
import SignIn from "../SignIn/SignIn";
import ProtectedRoute from "../Routes/Protected/ProtectedRoute";
import PublicRoute from "../Routes/Public/PublicRoute";

import Navbar from "../../components/Navbar/Navbar";
import ResultsTable from "../../components/ResultsTable";
import Data from "../../components/data";
import "./App.css";

import * as authActions from '../../state/authentication/authenticationActions';
import * as loadActions from '../../state/load/loadActions';

const API = "https://slack.com/api/oauth.access?client_id=";
const CLIENT_ID = "788630701380.807629152245";
const CLIENT_SECRET = "4962b16d6ccdc9e73853ae97d02e7943";


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <React.Fragment>
          <Router>
            <Switch>
              <PublicRoute exact path="/login" />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/poll-create" component={PollCreate} />
              <ProtectedRoute exact path="/results-table" component={ResultsTable} />
              <Redirect from="/loading" to="/login" />
              <Redirect to="/"/> {/*Add 404 page later*/}
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
  getCode = () => {
    let url_string = null;
    if (window.location.href.includes("loading")) {
      url_string = window.location.href;
      let url = new URL(url_string);
      let code = url.searchParams.get("code");
      this.props.setCode(code);
      return code;
    } else {
      return false;
    }
  };

  async componentWillMount() {
    if (this.getCode()) {
      let url = API + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + this.getCode();
      this.props.setUrl(url);

      this.props.startLoading();
      await Axios.get(url)
        .then(response => response.data)
        .then(data => {
          this.props.endLoading();
          console.log(data);
          if(data["ok"]){

            this.passLogInData(data);
          }
        }).catch(e => {
          console.log(e);
          this.props.endLoading();
          window.location.replace("/");
        }
          );
    }
  }

  passLogInData = (data) =>{
    this.setState({
      fetchedDataUser: data["user"],
      fetchedDataTeam: data["team"],
      fetchedAccess_token: data["access_token"]
    });
    let _data = {
      fetchedAccess_token : data["access_token"],
      fetchedDataTeam: {
        domain : data["team"]["domain"],
        id : data["team"]["id"],
        image_original : data["team"]["image_original"],
        name : data["team"]["name"]
      },
      fetchedDataUser: {
        id : data["user"]["id"],
        name : data["user"]["name"]
      }
    }
    this.props.logIn(_data);
  }
}

const mapStateToProps = (state) =>({
  code : state.authentication.code,
  fetchedAccessToken: state.authentication.fetchedAccessToken,
  isLoggedIn: state.authentication.isLoggedIn,
  url: state.authentication.url
});

const mapDispatchToProps = dispatch => ({
  setUrl: (url) => dispatch(authActions.setUrl(url)),
  setCode: (code) => dispatch(authActions.setCode(code)),
  logIn: (data) => dispatch(authActions.logIn(data)),
  logOut: () => dispatch(authActions.logOut()),
  startLoading: () => dispatch(loadActions.startLoadingLogin()),
  endLoading: () => dispatch(loadActions.endLoadingLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
