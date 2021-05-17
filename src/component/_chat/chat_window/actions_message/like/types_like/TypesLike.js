import React from 'react';
import PropTypes from 'prop-types';


//
TypesLike.propTypes = {
    
};

//
function TypesLike(props) {
    const {component, item_ix, chooseBdTypeLike} = props;
    //
    function onChooseBdTypeLike() {
        chooseBdTypeLike(item_ix)
    }

    //
    return (
        <div>
            <div
                className="ActionsLike_item"
                onClick={onChooseBdTypeLike}
            >
                {component}
            </div>
        </div>
    );
}

export default TypesLike;