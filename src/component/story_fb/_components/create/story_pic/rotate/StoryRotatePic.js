import React from 'react';
import PropTypes from 'prop-types';
//
import IconUpdate from '../../../../../../_icons_svg/icon_update/IconUpdate';
//
import IconDiv from '../../../../../some_div/icon_div/IconDiv';

//
StoryRotatePic.propTypes = {};

//
function StoryRotatePic({ handleRotate }) {
    //
    return (
        <button
            className="btn btn-hv btn-active padding-8px bg-always-white cursor-pointer brs-8px"
            onClick={handleRotate}
        >
            <IconDiv Icon={IconUpdate}>
                <span className="font-500">Rotate</span>
            </IconDiv>
        </button>
    );
}

export default StoryRotatePic;
