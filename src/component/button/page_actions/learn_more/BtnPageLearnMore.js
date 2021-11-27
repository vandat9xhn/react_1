import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageLearnMore.propTypes = {};

//
function BtnPageLearnMore({ use_title, handleAction }) {
    //
    function onLearnMore() {
        handleAction('learn_more');
    }

    //
    return (
        <BtnActions
            className={'BtnPageLearnMore bg-ccc'}
            Icon={null}
            use_title={use_title}
            title="Learn more"
            handleClick={onLearnMore}
        />
    );
}

export default BtnPageLearnMore;
