import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryBgItem.scss';

//
StoryBgItem.propTypes = {};

//
function StoryBgItem({ ix, is_active, bg, handleChooseBg }) {
    //
    function onChooseBg() {
        !is_active && handleChooseBg(ix);
    }

    //
    return (
        <div className="StoryBgItem padding-4px">
            <img
                className={`StoryBgItem_img brs-50 cursor-pointer ${
                    is_active
                        ? 'StoryBgItem_img-active'
                        : 'StoryBgItem_img-inactive'
                }`}
                src={bg}
                alt=""
                width="30"
                height="30"
                onClick={onChooseBg}
            />
        </div>
    );
}

export default StoryBgItem;
