import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import FbSearchInputItemLayout from '../../../_components/item_layout/FbSearchInputItemLayout';
//
import './FbSearchInputSearchItemLayout.scss';

//
FbSearchInputSearchItemLayout.propTypes = {};

//
function FbSearchInputSearchItemLayout({ link_to, left_elm, center_elm }) {
    //
    return (
        <div className="FbSearchInputSearchItemLayout">
            <FbSearchInputItemLayout
                link_to={link_to}
                left_elm={left_elm}
                center_elm={center_elm}
                right_elm={null}
            />
        </div>
    );
}

export default FbSearchInputSearchItemLayout;
