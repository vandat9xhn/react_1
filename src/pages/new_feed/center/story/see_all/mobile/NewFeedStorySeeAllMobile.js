import React from 'react';
import PropTypes from 'prop-types';
//
import './NewFeedStorySeeAllMobile.scss';

//
NewFeedStorySeeAllMobile.propTypes = {};

//
function NewFeedStorySeeAllMobile({ handleSeeMenuMobile }) {
    //
    return (
        <div
            className="NewFeedStorySeeAllMobile display-flex-center bg-fb-active padding-y-7px brs-8px text-blue font-500 cursor-pointer"
            onClick={handleSeeMenuMobile}
        >
            See All Stories
        </div>
    );
}

export default NewFeedStorySeeAllMobile;
