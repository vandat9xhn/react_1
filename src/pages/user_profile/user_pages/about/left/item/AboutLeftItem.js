import React from 'react';
import PropTypes from 'prop-types';

//
AboutLeftItem.propTypes = {
    item: PropTypes.shape({
        about: PropTypes.string,
        title: PropTypes.string,
    }),
    is_active: PropTypes.bool,
    changeCurrentAbout: PropTypes.func,
};

//
function AboutLeftItem(props) {
    const { item, is_active, changeCurrentAbout } = props.item;

    const {about, title} = item;

    //
    function onChangeCurrentAbout() {
        changeCurrentAbout(about);
    }

    //
    return (
        <div
            className={`AboutLeftItem ${is_active ? 'active-color' : ''}`}
            onClick={onChangeCurrentAbout}
        >
            {title}
        </div>
    );
}

export default AboutLeftItem;
