import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './CUPActivityTitleItem.scss';

//
CUPActivityTitleItem.propTypes = {};

//
function CUPActivityTitleItem({ activity_title_obj, ix, changeActivityTitle }) {
    //
    function onChangeActivityTitle() {
        changeActivityTitle(ix);
    }

    //
    return (
        <div
            className="CUPActivityTitleItem padding-12px brs-6px cursor-pointer hv-bg-blur"
            onClick={onChangeActivityTitle}
        >
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <div>{activity_title_obj.icon}</div>

                    <div className="margin-left-15px">
                        {activity_title_obj.title}
                    </div>
                </div>

                <div>
                    <IconsArrow x={200} size_icon="18px" />
                </div>
            </div>
        </div>
    );
}

export default CUPActivityTitleItem;
