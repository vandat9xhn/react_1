import React from 'react';
import PropTypes from 'prop-types';
//
import FsSearchFilterCheckedItem from '../item/FsScFilterCheckedItem';
//
import './FsSearchFilterChecked.scss';

//
FsSearchFilterChecked.propTypes = {};

//
function FsSearchFilterChecked({ filter_ix, title, arr, handleFilterChecked }) {
    //
    return (
        <div className="FsSearchFilterChecked">
            <div className="margin-bottom-10px font-500 text-cap">{title}</div>

            <div className="SearchFilter_list">
                <div>
                    {arr.map((item, item_ix) => (
                        <div
                            key={item_ix}
                            className="FsSearchFilterChecked_item padding-y-8px"
                        >
                            <FsSearchFilterCheckedItem
                                filter_ix={filter_ix}
                                item_ix={item_ix}
                                title={item.title}
                                checked={item.checked}
                                handleFilterChecked={handleFilterChecked}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FsSearchFilterChecked;
