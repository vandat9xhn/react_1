import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './NewFeedStorySeeAllMobile.scss';

//
NewFeedStorySeeAllMobile.propTypes = {};

//
function NewFeedStorySeeAllMobile(props) {
    //
    return (
        <Link to={`/stories?type=all`}>
            <div className="NewFeedStorySeeAllMobile bg-active-fb padding-8px brs-8px">
                <div className="display-flex-center">
                    <span className="text-blue label-field">See all stories</span>
                </div>
            </div>
        </Link>
    );
}

export default NewFeedStorySeeAllMobile;
