import React, { Component } from "react";
import {Modal, Button, ProgressBar, OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect} from 'react-redux';
import axios from 'axios';

import {BASE_URL} from "../../util/Constants/httpConstants";
import "./Home.css";
import ResultsModal from "../../components/ResultsModal/ResultsModal";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import HomeDataWrapper from "../HomeDataWrapper/HomeDataWrapper";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            polls : []
        }
    }

    componentDidMount() {
        const {userId} = this.props;
        axios.get(BASE_URL+'/api/user/'+userId+'/polls')
            .then(result => {
                this.setState({polls : result.data.polls, loading:false});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
    return (
      <React.Fragment>
        <div className="container">
            { this.state.loading ? <LoadingIndicator/> : <HomeDataWrapper polls={this.state.polls}/>}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        userId: state.authentication.fetchedDataUser.id
    }
}

export default connect(mapStateToProps)(Home);
