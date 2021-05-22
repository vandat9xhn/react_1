import React from 'react';
import PropTypes from 'prop-types';

//
AboutRightItem.propTypes = {
    title: PropTypes.string,
    add_title: PropTypes.string,
    AddNewComponent: PropTypes.element,
    AboutListComponent: PropTypes.element,
};

//
function AboutRightItem(props) {
    const { title, add_title, AddNewComponent, AboutListComponent } = props;

    //
    return (
        <div>
            <div>
                <div>{title}</div>

                <div>Add {add_title}</div>

                <div>{AddNewComponent}</div>

                <div>{AboutListComponent}</div>
            </div>
        </div>
    );
}

export default AboutRightItem;
