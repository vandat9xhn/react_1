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
function FilterSortItem(props) {
    const { is_active, title, sort_by, handleFilterSort } = props;
    //
    function onFilterSort() {
        handleFilterSort(sort_by);
    }

    //
    return (
        <div className="FilterSortItem position-rel cursor-pointer" onClick={onFilterSort}>
            <div className={is_active ? 'FilterSortItem_icon' : 'display-none'}>
                <IconSent />
            </div>

            <div className={is_active ? 'text-blue' : ''}>{title}</div>
        </div>
    );
}

export default FilterSortItem;
