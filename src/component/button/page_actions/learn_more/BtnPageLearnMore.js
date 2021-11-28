import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';

BtnPageLearnMore.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageLearnMore.defaultProps = {
    Icon: null,
    title: 'Learn more',
    className: 'bg-ccc',
};

//
function BtnPageLearnMore({
    className,
    Icon,
    title,
    use_title,
    use_icon,

    handleAction,
}) {
    //
    function onLearnMore() {
        handleAction('learn_more');
    }

    //
    return (
        <BtnActions
            className={`BtnPageLearnMore ${className}`}
            Icon={Icon}
            title={title}
            use_title={use_title}
            use_icon={use_icon}
            handleClick={onLearnMore}
        />
    );
}

export default BtnPageLearnMore;
