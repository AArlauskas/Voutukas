import React from "react";
import {Button, Modal, OverlayTrigger, ProgressBar, Tooltip} from "react-bootstrap";
import axios from 'axios';

import {BASE_URL} from "../../util/Constants/httpConstants";

import './ResultsModal.css';

import ResultsBar from "../ResultsBar/ResultsBar";
import SmallLoadingIndicator from "../SmallLoadingIndicator/SmallLoadingIndicator";

class ResultsModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options : [],
            loading: false
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if(nextProps.show && !this.props.show){
            this.setState({...this.state, loading: true});
            axios.get(BASE_URL+"/api/poll/results", {
                params : {
                    time_stamp: this.props.timestamp,
                    channel_id : this.props.channelId
                }
            }).then(results => {
                this.setState({...this.state, options : results.data.options, loading: false})
            })
        }
    }

    render(){

        return (
            <Modal show={this.props.show} onHide={this.props.onHide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Poll results</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="modal-heading">{this.props.question}</h4>
                    { this.state.loading ? <SmallLoadingIndicator/> :
                        this.state.options.map(option => <ResultsBar private={this.props.private} userVotes={option.votes_by_users} percent={option.percentage_of_votes} heading={option.option_text} />)}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ResultsModal;
