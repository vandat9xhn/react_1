import React from 'react';
import PropTypes from 'prop-types';
//
import LearnChild1 from '../child_1/LearnChild1';

//
LearnChild0.propTypes = {};

//
function LearnChild0({ item, ix, closeItem }) {
    //
    return (
        <div className="cursor-pointer">
            <div onClick={()  => closeItem(ix)}>
                CHILD ix: {ix}, item: {item}
            </div>

            <div>
                <LearnChild1 value={ix} />
            </div>
        </div>
    );
}

export default LearnChild0;
