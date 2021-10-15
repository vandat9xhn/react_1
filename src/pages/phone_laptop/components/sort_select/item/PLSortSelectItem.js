import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';

//
PLSortSelectItem.propTypes = {};

//
function PLSortSelectItem({ title, ix, is_active, selectSort }) {
    //
    function onSelectSort() {
        !is_active && selectSort(ix);
    }

    //
    return (
        <div
            className={`PLSortSelectItem display-flex align-items-center padding-10px cursor-pointer ${
                is_active ? 'text-blue font-600' : ''
            }`}
            onClick={onSelectSort}
        >
            {is_active ? (
                <div className="margin-right-5px">
                    <IconSent size_icon="16px" stroke="currentColor" />
                </div>
            ) : null}

            <div>{title}</div>
        </div>
    );
}

export default PLSortSelectItem;
