import React from 'react';
import PropTypes from 'prop-types';
//
import PLDGroupItem from '../item/PLDGroupItem';

//
PLDetailGroups.propTypes = {};

//
function PLDetailGroups({ group_arr, handleChooseType }) {
    //
    return (
        <div className="PLDetailGroups font-13px font-400">
            {group_arr.map((item_arr, group_ix) => (
                <div key={group_ix} className="margin-bottom-15px">
                    <ul className="list-none display-flex">
                        {item_arr.map((item, item_ix) => (
                            <li key={item_ix} className="margin-right-10px">
                                <PLDGroupItem
                                    group_ix={group_ix}
                                    item_ix={item_ix}
                                    title={item.title}
                                    is_active={item.is_active}
                                    handleClick={handleChooseType}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default PLDetailGroups;
