import React from "react";
import {Button, Modal, OverlayTrigger, ProgressBar, Tooltip} from "react-bootstrap";
import axios from 'axios';

import './DeletePollModal.css';
import {BASE_URL} from "../../util/Constants/httpConstants";

class DeletePollModal extends React.Component{
    constructor(props){
        super(props);
        this.deletePoll = this.deletePoll.bind(this);
    }

    async deletePoll() {
        axios.delete(BASE_URL+"/api/poll/delete",{
            params : {
                time_stamp : this.props.timestamp,
                channel_id : this.props.channelId
            }
        }).then(() => (window.location.reload())
        ).catch(() => (window.location.reload()));
    };

    render(){
        return (
            <Modal className="delete-modal" show={this.props.show} onHide={this.props.onHide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Do you really want to delete this poll?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="modal-heading">All poll data will be lost forever</h4>
                    <div className="row align-content-center">
                        <Button className="delete-poll-button" variant="primary" onClick={this.deletePoll}>
                            Delete poll
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onHide}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default DeletePollModal;
