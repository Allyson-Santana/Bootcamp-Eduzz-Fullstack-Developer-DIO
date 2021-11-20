import React, { Component } from "react";

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incremente = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }

    decremente = () => {
        const { count } = this.state;
        this.setState({
            count: count - 1
        });
    }

    render () {

        const { render } = this.props;
        const { count } = this.state;

        return (
            <div>
                {
                    render ({
                        incremente: this.incremente,
                        decremente: this.decremente,
                        count
                    })
                }
            </div>
        );
    }
}

export default Counter;