import React from 'react';
import PropTypes from 'prop-types';
//
import IconSent from '../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import './FilterSortItem.scss';

//
FilterSortItem.propTypes = {
    is_active: PropTypes.bool,
    title: PropTypes.string,
    sort_by: PropTypes.string,
    handleFilterSort: PropTypes.func,
};

//
function FilterSortItem({ is_active, title, sort_by, handleFilterSort }) {
    //
    function onFilterSort() {
        handleFilterSort(sort_by);
    }

    //
    return (
        <div
            className="FilterSortItem pos-rel cursor-pointer"
            onClick={onFilterSort}
        >
            <div
                className={
                    is_active
                        ? 'FilterSortItem_icon display-flex align-items-center'
                        : 'display-none'
                }
            >
                <IconSent />
            </div>

            <div className={is_active ? 'text-blue font-500' : ''}>
                {title}
            </div>
        </div>
    );
}

export default FilterSortItem;
