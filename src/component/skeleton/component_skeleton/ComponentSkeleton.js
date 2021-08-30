import React from 'react';
import PropTypes from 'prop-types';
//
import './ComponentSkeleton.scss';

//
ComponentSkeleton.propTypes = {
    component: PropTypes.element,
    has_fetched: PropTypes.bool,
    num: PropTypes.number,
    skeleton_class: PropTypes.string,
};

ComponentSkeleton.defaultProps = {
    num: 1,
    skeleton_class: '',
};

//
function ComponentSkeleton({ component, has_fetched, num, skeleton_class }) {
    //
    return !has_fetched ? (
        <div
            className={`ComponentSkeleton pointer-events-none ${skeleton_class}`}
        >
            {Array(num)
                .fill(1)
                .map((_, ix) => (
                    <div
                        key={`ComponentSkeleton_${ix}`}
                        className="ComponentSkeleton_item"
                    >
                        {component}
                    </div>
                ))}
        </div>
    ) : null;
}

export default ComponentSkeleton;
