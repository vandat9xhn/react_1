import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import FbSearchInputItemLayout from '../../../_components/item_layout/FbSearchInputItemLayout';
// 
import './FbSearchHistoryItemLayout.scss';

//
FbSearchHistoryItemLayout.propTypes = {};

//
function FbSearchHistoryItemLayout({ link_to, left_elm, center_elm }) {
    //
    return (
        <div className="FbSearchHistoryItemLayout">
            <FbSearchInputItemLayout
                link_to={link_to}
                left_elm={left_elm}
                center_elm={center_elm}
                right_elm={
                    <div className="pos-rel z-index-1 btn-icon-24px cursor-pointer hv-bg-fb">
                        <IconsArrow y={400} size_icon="12px" />
                    </div>
                }
            />
        </div>
    );
}

export default FbSearchHistoryItemLayout;
