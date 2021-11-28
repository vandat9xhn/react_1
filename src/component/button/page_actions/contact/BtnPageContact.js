import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageContact.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageContact.defaultProps = {
    Icon: null,
    title: 'Contact',
    className: 'bg-ccc',
};

//
function BtnPageContact({
    className,
    Icon,
    title,
    use_title,
    use_icon,

    handleAction,
}) {
    //
    function onContact() {
        handleAction('contact');
    }

    //
    return (
        <BtnActions
            className={`BtnPageContact ${className}`}
            Icon={Icon}
            title={title}
            use_title={use_title}
            use_icon={use_icon}
            handleClick={onContact}
        />
    );
}

export default BtnPageContact;
