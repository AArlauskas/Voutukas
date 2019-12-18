import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from "../../../components/Navbar/Navbar";

class ProtectedRoute extends React.Component{
    renderComponent(){
        console.log(this.props);
        const {component: Component, isLoggedIn} = this.props;
        if(isLoggedIn){
            return <Component/>;
        }
        return <Redirect to="/login" />;
    }
    render() {
        return(
            <React.Fragment>
                <Navbar />
                {this.renderComponent()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>({
    isLoggedIn : state.authentication.isLoggedIn
});
export default connect(mapStateToProps)(ProtectedRoute);