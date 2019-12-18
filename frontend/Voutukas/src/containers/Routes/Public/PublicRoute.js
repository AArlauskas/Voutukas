import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import SignIn from "../../SignIn/SignIn";

class PublicRoute extends React.Component{
    renderComponent(){
        const {isLoggedIn} = this.props;
        if(isLoggedIn){
            return <Redirect to="/" />;
        }
        return <SignIn />;
    }
    render() {
        return(
            <React.Fragment>
                {this.renderComponent()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>({
    isLoggedIn : state.authentication.isLoggedIn
});
export default connect(mapStateToProps)(PublicRoute);
