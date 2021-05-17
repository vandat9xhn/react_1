import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CloseDiv extends Component {

    componentDidMount() {
        window.addEventListener('click', this.handleClick)
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick)
    }
    
    handleClick = (event) => {
        if(!this.myDiv.contains(event.target)){
            this.props.makeDivHidden();
        }
    }

    divRef = elm => {
        if(elm !== null){
            this.myDiv = elm;
        }
    }

    render() {
        return (
            <div ref={this.divRef}>
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