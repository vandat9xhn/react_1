import React from 'react';
import PropTypes from 'prop-types';
//
import './NewFeedStorySeeAllMobile.scss';

//
NewFeedStorySeeAllMobile.propTypes = {};

//
function NewFeedStorySeeAllMobile(props) {
    //
    return (
        <div className="NewFeedStorySeeAllMobile bg-active-fb padding-4px brs-8px">
            <div className="display-flex-center">
                <span className="text-blue label-field">See All Stories</span>
            </div>
        </div>
    );
}

export default NewFeedStorySeeAllMobile;
