import React from "react";
import {OverlayTrigger, ProgressBar, Tooltip} from "react-bootstrap";

import './ResultsBar.css'

const tooltip = (data, isPrivate) => {
    let votes = [];
    data.map(vote => votes.push(vote.fullName));
    console.log(votes);
    return (
        <Tooltip id="tooltip">
            <strong>{data.length} {data.length%10===1 ? "vote" : "votes"}{data.length !==0 ? ":" : ""}</strong><br/>
            {isPrivate ? "This poll is private, you can't see individual votes" :
                votes.join(", ")}
        </Tooltip>
    );
};

/*(<Tooltip id="hi">Hello, world!</Tooltip>)*/

class ResultsBar extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {userVotes} = this.props;
        console.log(userVotes);
        return(
            <div className="row">
                <div className="col-md-5 col-sm-12 order-md-2 align-self-center">
                    <h5 className="modal-option">{this.props.heading}</h5>
                </div>
                <div className="col-md-7 col-sm-12 order-md-1 align-self-center">
                    <OverlayTrigger placement="bottom" delay={{ show: 100, hide: 100 }} overlay={tooltip(this.props.userVotes ? userVotes : [], this.props.private)}>
                        <ProgressBar className={this.props.percent<10 ? 'pull-label' : ''} now={this.props.percent} label={`${this.props.percent}%`} />
                    </OverlayTrigger>
                </div>
            </div>
        );
    }
}

export default  ResultsBar;
