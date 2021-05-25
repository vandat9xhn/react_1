import React from 'react';
import PropTypes from 'prop-types';

//
ComponentSkeleton.propTypes = {
    component: PropTypes.element,
    has_fetched: PropTypes.bool,
};

//
function ComponentSkeleton({
    component,
    has_fetched,
}) {
    return (
        <div>
            {!has_fetched && component}
        </div>
    );
}

export default ComponentSkeleton;
