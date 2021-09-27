import React from 'react';
import PropTypes from 'prop-types';
//
import './CarouselUnderscore.scss';

//
CarouselUnderscore.propTypes = {};

//
function CarouselUnderscore({ count, active_ix }) {
    //
    return (
        <div className="CarouselUnderscore">
            <div className="display-flex-center">
                {Array(count)
                    .fill(1)
                    .map((_, ix) => (
                        <div
                            key={ix}
                            className="CarouselUnderscore_item padding-4px"
                        >
                            <div
                                className={`CarouselUnderscore_item_contain ${
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

export default CarouselUnderscore;
