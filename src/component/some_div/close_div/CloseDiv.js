import React, { Component } from 'react';
import PropTypes from 'prop-types';

//
class CloseDiv extends Component {
    //
    divRef = (elm) => {
        if (elm !== null) {
            this.myDiv = elm;
        }
    };

    //
    componentDidMount() {
        window.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
    }

    //
    handleStopPropagation = (e) => {
        e.stopPropagation();
    };

    //
    handleClick = (event) => {
        if (!this.myDiv.contains(event.target)) {
            this.props.makeDivHidden();
        }
    };

    //
    render() {
        return (
            <div ref={this.divRef} onClick={this.handleStopPropagation}>
                {this.props.children}
            </div>
        );
    }
}

CloseDiv.propTypes = {
    children: PropTypes.element.isRequired,
    makeDivHidden: PropTypes.func.isRequired,
};

export default CloseDiv;
