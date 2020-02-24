import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        erroMessage: 'Something Went Wrong'
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error}); 
    }


    render() {
        if(this.state.hasError) {
            return <h1>{this.state.erroMessage}!</h1>;
        } else {
            return this.props.childrenm; 
        }
        
    }
}

export default ErrorBoundary; 