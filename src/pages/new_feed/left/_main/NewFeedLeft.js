import React from 'react';
import PropTypes from 'prop-types';
//
import FbSearchInput from '../../../../component/fb_search/input/_main/FbSearchInput';
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
            <div className="NewFeedLeft_search pos-sticky top-0 margin-bottom-10px padding-x-8px">
                <FbSearchInput />
            </div>

            <div>
                <NewFeedLeftHead />
            </div>
        </div>
    );
}

export default NewFeedLeft;
