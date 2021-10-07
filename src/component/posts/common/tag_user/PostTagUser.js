import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './PostTagUser.scss';

//
PostTagUser.propTypes = {};

//
function PostTagUser({ ix, name, handleDelTag }) {
    //
    function onDelTag() {
        handleDelTag(ix);
    }

    //
    return (
        <div className="PostTagUser pos-rel padding-x-8px padding-y-6px brs-8px bg-primary font-500 font-12px hv-bg-blur cursor-pointer">
            <div className="flex-between-center">
                <div className="margin-right-10px">{name}</div>

                <div
                    className="PostTagUser_del cursor-pointer"
                    onClick={onDelTag}
                >
                    <IconsArrow y={400} size_icon="16px" />
                </div>
            </div>
        </div>
    );
}

export default PostTagUser;
