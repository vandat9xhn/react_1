import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameImgOnline from '../online/PicNameImgOnline';
//
import './PicNameImg.scss';

//
PicNameImg.propTypes = {};

//
function PicNameImg({
    picture,

    use_time_online,
    time_online,

    use_new_story = false,
    has_new_story,
}) {
    //
    return (
        <div
            className={`PicNameImg pos-rel brs-50 bg-primary ${
                use_new_story && has_new_story ? 'PicNameImg-story_new' : ''
            }`}
        >
            <img className="wh-100 brs-50" src={picture} alt="" />

            {use_time_online ? (
                <div className="PicNameImg_time pos-abs right-0 bottom-0">
                    <PicNameImgOnline time_online={time_online} />
                </div>
            ) : null}
        </div>
    );
}

export default PicNameImg;
