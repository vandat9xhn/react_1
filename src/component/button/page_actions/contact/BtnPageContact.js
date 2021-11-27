import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageContact.propTypes = {};

//
function BtnPageContact({ use_title, handleAction }) {
    //
    function onContact() {
        handleAction('contact');
    }

    //
    return (
        <BtnActions
            className={'BtnPageContact bg-ccc'}
            Icon={null}
            use_title={use_title}
            title="Contact"
            handleClick={onContact}
        />
    );
}

export default BtnPageContact;
