import React from "react";
import ResultsModal from "../ResultsModal/ResultsModal";
import DeletePollModal from "../DeletePollModal/DeletePollModal";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import './ResultsCard.css';

class ResultsCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showResultsModal: false,
            showDeleteModal: false
        }
        this.handleShowResultsModal = this.handleShowResultsModal.bind(this);
        this.handleHideResultsModal = this.handleHideResultsModal.bind(this);
        this.handleShowDeleteModal = this.handleShowDeleteModal.bind(this);
        this.handleHideDeleteModal = this.handleHideDeleteModal.bind(this);

        this.isPrivate = false;
    }

    handleShowResultsModal = (event) => {
        event.preventDefault();
        this.setState({...this.state, showResultsModal: true})
    };
    handleHideResultsModal = () => this.setState({...this.state, showResultsModal: false});

    handleShowDeleteModal = (event) => {
        event.preventDefault();
        this.setState({...this.state, showDeleteModal: true});
    }
    handleHideDeleteModal = () => {
        this.setState( {...this.state, showDeleteModal: false})
    }

    renderProperties = (properties) =>{
        if(properties.length === 0){
            return <React.Fragment/>;
        }

        let text = "";
        properties.map((p, i) => {
            switch (p.id) {
                case 1:
                    text += "Users can add options";
                    break;
                case 2:
                    text += "Multi-vote";
                    break;
                case 3:
                    text += "Anonymous";
                    this.isPrivate = true;
            }
            if(i !== properties.length-1){
                text += ";  ";
            }
        });

        return text;
    };

    render() {
        console.log(this.props.data);
        const {data} = this.props;
        return(
            <React.Fragment>
                <div className="col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <a href="#" onClick={this.handleShowDeleteModal} className="delete-poll-icon"><FontAwesomeIcon icon={faTimes}/></a>
                            <h5 className="card-title">{this.props.data.poll_question}</h5>
                            <p className="card-text"><span className="pink-accent">Channel ID:</span> {data.channel_id}</p>
                            <p className="card-text"><span className="pink-accent">Date:</span> {new Date(data.initialTimeStamp*1000).toLocaleDateString("en-US")}</p>
                            <p className="card-text"><span className="pink-accent">Number of options:</span> {data["options"].length}</p>
                            <p className="card-text"><span className="pink-accent">Number of votes:</span> {data.vote_count}</p>
                            <p className="card-text"><span className="pink-accent">Properties: </span> {this.renderProperties(data.properties)}</p>

                            <a href="#" onClick={this.handleShowResultsModal} className="btn btn-primary view-results-btn">View results</a>
                        </div>
                    </div>
                </div>
                <DeletePollModal channelId={data.channel_id} timestamp={data.time_stamp} show={this.state.showDeleteModal} onHide={this.handleHideDeleteModal} />
                <ResultsModal private={this.isPrivate} question={data.poll_question} channelId={data.channel_id} timestamp={data.time_stamp} show={this.state.showResultsModal} onHide={this.handleHideResultsModal} />
            </React.Fragment>
        );
    }
}

export default ResultsCard;
