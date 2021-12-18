import React from 'react';
import PropTypes from 'prop-types';
//
import BtnActions from '../../actions/BtnActions';
//
import './BtnProfileActions.scss';

//
BtnProfileActions.propTypes = {
    ...BtnProfileActions.propTypes,
};

//
function BtnProfileActions({
    className,

    Icon,
    use_icon,
    use_title,
    title,
    
    handleClick,
}) {
    //
    return (
        <BtnActions
            className={`BtnProfileActions ${className}`}
            Icon={Icon}
            use_icon={use_icon}
            use_title={use_title}
            title={title}
            handleClick={handleClick}
        />
    );
}

export default BtnProfileActions;
