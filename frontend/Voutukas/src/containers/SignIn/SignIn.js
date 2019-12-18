import React, { Component } from "react";
import {connect} from 'react-redux';
import * as loadActions from '../../state/load/loadActions';
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import "./SignIn.css";
import logo from "../../assets/logos/logo_vertical_big.png";
import devbridgeLogo from "../../assets/logos/devbridge-logo.svg";
import wizardLogo from "../../assets/logos/sourcery-wizard-logo.svg";
import slackLogo from "../../assets/logos/slack-logo.svg";

class SignIn extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        this.props.isLoading ? <LoadingIndicator /> :
          <div id="signIn">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-7 col-xs-12">
                          <img className="sign_in_logo" src={logo} alt="VoteHub" />
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div id="SlackButton">
                          <a
                              id="SlackButton"
                              href="https://slack.com/oauth/authorize?scope=identity.basic,identity.team&client_id=788630701380.807629152245"
                          >
                              <img
                                  alt="SlackButton"
                                  height="40"
                                  width="172"
                                  src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
                                  srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
                              />
                          </a>
                      </div>
                  </div>
              </div>
              <div className="links-container-bottom">
                  <a className="logo-bottom-small-container" href="https://www.devbridge.com/">
                      <img className="logo-bottom-small" src={devbridgeLogo} />
                  </a>
                  <a className="logo-bottom-small-container wizard" href="https://www.devbridge.com/sourcery/academy/">
                      <img className="logo-bottom-small" src={wizardLogo} />
                  </a>
                  <a className="logo-bottom-small-container slack" href="https://www.slack.com/">
                      <img className="logo-bottom-small" src={slackLogo} />
                  </a>
              </div>
          </div>
    );
  }
}

const mapStateToProps = (state) => ({
   isLoading: state.load.loginLoading
});



export default connect(mapStateToProps)(SignIn);
