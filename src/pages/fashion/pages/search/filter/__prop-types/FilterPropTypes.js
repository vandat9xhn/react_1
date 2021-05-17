import PropTypes from 'prop-types';

//
export const search_area_props = {
    area_arr: PropTypes.array,
    handleAreaChecked: PropTypes.func,
}

//
export const search_rate_props = {
    active_rate_ix: PropTypes.number,
    handleFilterRate: PropTypes.func,
}

//
export const search_sort_props = {
    cur_sort_by: PropTypes.string,
    handleFilterSort: PropTypes.func,
}