import React from 'react';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';

//
GroupPageDiscussSort.propTypes = {};

//
function GroupPageDiscussSort({ sort_obj, bg_btn, openDiscussSort }) {
    //
    return (
        <div
            className="GroupPageDiscussSort display-flex font-600"
            style={{ color: bg_btn }}
        >
            <div
                className="padding-8px cursor-pointer"
                onClick={openDiscussSort}
            >
                <div className="inline-block margin-right-8px">
                    {sort_obj.title}
                </div>

                <IconCaret fill="currentColor" size_icon="13px" />
            </div>
        </div>
    );
}

export default GroupPageDiscussSort;
