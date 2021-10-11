import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './CUPActivityTypeItem.scss';

//
CUPActivityTypeItem.propTypes = {};

//
function CUPActivityTypeItem({ activity_type_obj, ix, changeActivityType }) {
    //
    function onChangeActivityType() {
        changeActivityType(ix);
    }

    //
    return (
        <div
            className="CUPActivityTypeItem padding-12px brs-6px cursor-pointer hv-bg-blur"
            onClick={onChangeActivityType}
        >
            <div className="flex-between-center">
                <div className="display-flex align-items-center">
                    <div>{activity_type_obj.icon}</div>

                    <div className="margin-left-15px">
                        {activity_type_obj.title}
                    </div>
                </div>

                <div>
                    <IconsArrow x={200} size_icon="18px" />
                </div>
            </div>
        </div>
    );
}

export default CUPActivityTypeItem;
