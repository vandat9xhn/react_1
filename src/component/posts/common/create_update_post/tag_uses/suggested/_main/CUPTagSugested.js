import React from 'react';
import PropTypes from 'prop-types';
//
import CUPTagSugestedItem from '../item/CUPTagSugestedItem';

//
CUPTagSugested.propTypes = {};

//
function CUPTagSugested({ friend_arr, chooseTagFriend }) {
    //
    return (
        <div className="CUPTagSugested padding-16px">
            <div className="margin-bottom-5px line-16px text-third font-600 font-13px">
                SUGGESTIONS
            </div>

            <div>
                {friend_arr.map((item, ix) => (
                    <div key={item.id}>
                        <CUPTagSugestedItem
                            ix={ix}
                            user={item}
                            chooseTagFriend={chooseTagFriend}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CUPTagSugested;
