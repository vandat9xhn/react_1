import React from 'react';
import PropTypes from 'prop-types';
//
import './PLDCarouselChoice.scss';

//
PLDCarouselChoice.propTypes = {};

//
function PLDCarouselChoice({ ix, img, title, is_active, handleChoose }) {
    //
    function onChoose() {
        !is_active && handleChoose(ix);
    }

    //
    return (
        <div className="PLDCarouselChoice cursor-pointer" onClick={onChoose}>
            <div
                className={`PLDCarouselChoice_img display-flex-center padding-6px border-blur brs-2px ${
                    is_active ? 'PLDCarouselChoice_img-active' : ''
                }`}
            >
                <img
                    className="object-fit-cover"
                    src={img}
                    alt=""
                    width="40"
                    height="40"
                />
            </div>

            <div className="margin-top-5px text-align-center">{title}</div>
        </div>
    );
}

export default PLDCarouselChoice;
