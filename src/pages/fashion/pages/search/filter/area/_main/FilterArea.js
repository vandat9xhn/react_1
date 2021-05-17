import React from 'react';
import PropTypes from 'prop-types';
// 
import { search_area_props } from '../../__prop-types/FilterPropTypes';
import FilterAreaItem from '../item/FilterAreaItem';
// 
import './FilterArea.scss';

// 
FilterArea.propTypes = {
    ...search_area_props,
};

// 
function FilterArea(props) {
    const {area_arr, handleAreaChecked} = props;

    // 
    return (
        <div className="FilterArea">
            <div className="SearchFilter_title label-field">
                Choose area
            </div>

            <div className="SearchFilter_list">
                <div>
                    {area_arr.map((area, area_ix) => (
                        <div key={`FilterArea_${area_ix}`} className="SearchFilter_item">
                            <FilterAreaItem
                                area_ix={area_ix}
                                title={area.title}
                                checked={area.checked}
                                handleAreaChecked={handleAreaChecked}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterArea;