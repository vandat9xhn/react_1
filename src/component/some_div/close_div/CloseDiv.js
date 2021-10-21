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
    handleClick = (event) => {
        if (this.myDiv.contains(event.target)) {
            return;
        }

        if (this.props.refs_target) {
            for (const ref_target of this.props.refs_target) {
                if (ref_target.current.contains(event.target)) {
                    return;
                }
            }
        }

        this.props.makeDivHidden();
    };

    //
    render() {
        return <div ref={this.divRef}>{this.props.children}</div>;
    }
}

CloseDiv.propTypes = {
    children: PropTypes.element.isRequired,
    refs_target: PropTypes.arrayOf(
        PropTypes.shape({
            current: PropTypes.object,
        })
    ),
    makeDivHidden: PropTypes.func.isRequired,
};

export default CloseDiv;
