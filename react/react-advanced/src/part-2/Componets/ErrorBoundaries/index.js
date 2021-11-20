import React, { Component } from "react";
import ErrorImg from './ErrorMessage.png';

class ErrorBoundaries extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(`Error: ${error}`);
        console.log(`Error: ${errorInfo}`); 
    };

    render () {
        if( this.state.hasError ) {
            return <img width={200} src={ErrorImg} />
        }
        return this.props.children;
    }
}


export default ErrorBoundaries;