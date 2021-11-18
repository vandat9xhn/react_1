import React from 'react';
import PropTypes from 'prop-types';
//
import NewFeedLeftHead from '../head/NewFeedLeftHead';
//
import './NewFeedLeft.scss';

//
NewFeedLeft.propTypes = {};

//
function NewFeedLeft({}) {
    //
    return (
        <div className="NewFeedLeft scroll-thin">
            <div>
                <NewFeedLeftHead />
            </div>
        </div>
    );
}

export default NewFeedLeft;
