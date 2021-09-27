import React from 'react';
import PropTypes from 'prop-types';
//
import './CarouselDot.scss';

//
CarouselDot.propTypes = {};

//
function CarouselDot({ count, active_ix }) {
    //
    return (
        <div className="CarouselDot">
            <div className="display-flex-center">
                {Array(count)
                    .fill(1)
                    .map((_, ix) => (
                        <div
                            key={ix}
                            className="CarouselDot_item padding-4px"
                        >
                            <div
                                className={`CarouselDot_item_contain brs-50 ${
                                    active_ix == ix
                                        ? 'bg-fashion-carousel-active'
                                        : 'bg-ccc'
                                }`}
                            ></div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default CarouselDot;
