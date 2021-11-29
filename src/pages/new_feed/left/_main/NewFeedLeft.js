import React from 'react';
import PropTypes from 'prop-types';
//
import NewFeedLeftHead from '../head/NewFeedLeftHead';
import NewFeedLeftShortcuts from '../shortcuts/_main/NewFeedLeftShortcuts';
//
import './NewFeedLeft.scss';

//
NewFeedLeft.propTypes = {};

//
function NewFeedLeft({}) {
    //
    return (
        <div className="NewFeedLeft padding-y-10px scroll-thin overflow-y-auto">
            <div>
                <NewFeedLeftHead />
            </div>

            <div className="margin-y-8px margin-x-16px padding-top-1px bg-blur"></div>

            <div>
                <NewFeedLeftShortcuts />
            </div>
        </div>
    );
}

export default NewFeedLeft;
