import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ContextFixAPI from './DivFixContextProvider';
//
import DivFixPeople from '../people/DivFixPeople';
import DivFixAction from '../action/DivFixAction';
import DivFixLike from '../like/DivFixLike';

//
class DivFixContextConsumer extends Component {
    //
    refPeople = (elm) => {
        if (elm != null) {
            this.openDivFixPeople = elm.openDivFixPeople;
            this.closeDivFixPeople = elm.closeDivFixPeople;
        }
    };

    refAction = (elm) => {
        if (elm != null) {
            this.openDivFixAction = elm.openDivFixAction;
            this.closeDivFixAction = elm.closeDivFixAction;
        }
    };

    refLike = (elm) => {
        if (elm != null) {
            this.openDivFixLike = elm.openDivFixLike;
            this.closeDivFixLike = elm.closeDivFixLike;
        }
    };

    render() {
        //
        return (
            <ContextFixAPI
                ref_parent_elm={this.props.ref_parent_elm}
                //
                openDivFixLike={this.openDivFixLike}
                closeDivFixLike={this.closeDivFixLike}
                //
                openDivFixPeople={this.openDivFixPeople}
                closeDivFixPeople={this.closeDivFixPeople}
                //
                openDivFixAction={this.openDivFixAction}
                closeDivFixAction={this.closeDivFixAction}
            >
                <React.Fragment>
                    {this.props.children}

                    <DivFixPeople ref={this.refPeople} />

                    <DivFixAction ref={this.refAction} />

                    <DivFixLike ref={this.refLike} />
                </React.Fragment>
            </ContextFixAPI>
        );
    }
}

//
DivFixContextConsumer.propTypes = {};

export default DivFixContextConsumer;
