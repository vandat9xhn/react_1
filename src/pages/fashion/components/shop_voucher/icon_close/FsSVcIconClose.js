import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FsSVcIconClose.propTypes = {};

//
function FsSVcIconClose({ handelClose }) {
    //
    return (
        <div className="FsSVcIconClose_close pos-abs right-0 top-0 padding-8px">
            <div
                className="FsSVcIconClose_close_contain display-flex-center brs-50 bg-film"
                onClick={handelClose}
            >
                <IconsArrow y={400} size_icon="1rem" />
            </div>
        </div>
    );
}

export default FsSVcIconClose;
