import React from 'react';
import PropTypes from 'prop-types';

//
TypeLikeItem.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    component: PropTypes.object,
    chooseListTypeLike: PropTypes.func,
};

//
function TypeLikeItem(props) {
    const { index, title, component, chooseListTypeLike } = props;

    //
    function onChooseListTypeLike() {
        chooseListTypeLike(index);
    }
    //
    return (
        <div>
            <div className="ListTypeLike_col">
                <div
                    className="ListTypeLike__item"
                    onClick={onChooseListTypeLike}
                    title={title}
                >
                    {component}
                </div>
            </div>
        </div>
    );
}

export default TypeLikeItem;
