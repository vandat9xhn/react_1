import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../../picture_name/pic_name_content/PicNameContent';

//
CUPTagSugestedItem.propTypes = {};

//
function CUPTagSugestedItem({ ix, user, chooseTagFriend }) {
    //
    function handleClick() {
        chooseTagFriend(ix);
    }

    //
    return (
        <div
            className="CUPTagSugestedItem padding-10px brs-5px hv-bg-hv cursor-pointer"
            onClick={handleClick}
        >
            <PicNameContent user={user} />
        </div>
    );
}

export default CUPTagSugestedItem;
