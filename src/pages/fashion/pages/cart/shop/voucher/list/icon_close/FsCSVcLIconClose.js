import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FsCSVcLIconClose.propTypes = {};

//
function FsCSVcLIconClose({ handelClose }) {
    //
    return (
        <div className="FsCSVoucherList_close pos-abs right-0 top-0 padding-8px">
            <div
                className="FsCSVoucherList_close_contain display-flex-center brs-50 bg-film"
                onClick={handelClose}
            >
                <IconsArrow y={400} size_icon="1rem" />
            </div>
        </div>
    );
}

export default FsCSVcLIconClose;
