import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import TestWsChild from './child/TestWsChild';

//
class TestWs extends Component {
    state = {
        arr: [1, 2, 3],
    };

    componentDidMount() {}

    componentWillUnmount() {}

    handleTestParent = () => {
        const {arr} = this.state;
        arr.push(arr.length + 1)
    }
    
    render() {
        const { arr } = this.state;
        
        console.log(this.state.arr);
        //
        return (
            <div>
                <div onClick={this.handleTestParent}>
                    Test parent
                </div>
                <TestWsChild arr={arr} />
            </div>
        );
    }
}

TestWs.propTypes = {};

export default TestWs;

