import React from 'react';
import PropTypes from 'prop-types';
//
import FilterAreaItem from '../item/FilterAreaItem';
//
import './FilterArea.scss';

//
FilterArea.propTypes = {};

//
function FilterArea({ area_arr, handleAreaChecked }) {
    //
    return (
        <div className="FilterArea">
            <h3 className="SearchFilter_title margin-0">Choose area</h3>

            <div className="SearchFilter_list">
                <div>
                    {area_arr.map((area, area_ix) => (
                        <div
                            key={`FilterArea_${area_ix}`}
                            className="SearchFilter_item"
                        >
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
