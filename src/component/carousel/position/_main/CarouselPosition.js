import React from 'react';
import PropTypes from 'prop-types';
//
import CarouselDot from '../dot/CarouselDot';
import CarouselUnderscore from '../underscore/CarouselUnderscore';

//
CarouselPosition.propTypes = {};

//
function CarouselPosition({
    has_fetched,
    use_dot,
    use_underscore,
    ...rest_props
}) {
    //
    if (!use_dot && !use_underscore) {
        return null;
    }

    //
    return (
        <div
            className={`pos-abs bottom-0 x-center padding-8px pointer-events-none ${
                has_fetched ? '' : 'display-none'
            }`}
        >
            {use_dot ? (
                <CarouselDot {...rest_props} />
            ) : use_underscore ? (
                <CarouselUnderscore {...rest_props} />
            ) : null}
        </div>
    );
}

export default CarouselPosition;
