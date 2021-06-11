import React from 'react';
import PropTypes from 'prop-types';
// 
import './TypeLikeItem.scss';

//
TypeLikeItem.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    component: PropTypes.object,
    chooseListTypeLike: PropTypes.func,
};

//
function TypeLikeItem({ index, title, component, chooseListTypeLike }) {
    //
    function onChooseListTypeLike() {
        chooseListTypeLike(index);
    }

    //
    return (
        <div
            className="ListTypeLikeItem"
            onClick={onChooseListTypeLike}
            title={title}
        >
            {component}
        </div>
    );
}

export default TypeLikeItem;
