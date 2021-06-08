import React from 'react';
import PropTypes from 'prop-types';

//
TypesLike.propTypes = {};

//
function TypesLike({ component, item_ix, chooseBdTypeLike }) {
    //
    function onChooseBdTypeLike() {
        chooseBdTypeLike(item_ix);
    }

    //
    return (
        <div>
            <div className="ActionsLike_item" onClick={onChooseBdTypeLike}>
                {component}
            </div>
        </div>
    );
}

export default TypesLike;
