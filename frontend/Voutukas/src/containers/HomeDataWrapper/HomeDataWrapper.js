import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import React from "react";

export default function HomeDataWrapper(props){
    return(
        <React.Fragment>
            {props.polls.length !== 0 ?
                <h2 className="main-heading">Here are your <span className="pink-accent"> latest polls</span></h2> :
                <h2 className="main-heading">Sadly, you have no<span className="pink-accent"> active polls</span></h2>
            }

            <div className="row">
                {props.polls.map(poll => {
                    return poll.options ? <ResultsCard key={poll.time_stamp} data={poll} /> : ""
                })}
            </div>
        </React.Fragment>
    );
}
