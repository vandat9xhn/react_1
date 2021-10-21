import React from 'react';
import PropTypes from 'prop-types';
// 
import PLDetailScreenHeadItem from '../item/PLDetailScreenHeadItem';

//
PLDetailScreenHead.propTypes = {};

//
function PLDetailScreenHead({ head_arr, head_ix }) {
    //
    return (
        <div className="PLDetailScreenHead padding-y-10px">
            <ul className="display-flex-center list-none">
                {head_arr.map((item, ix) => (
                    <li
                        key={ix}
                        className="PLDetailScreenHead_item"
                        
                    >
                        <PLDetailScreenHeadItem ix={ix} is_active={ix == head_ix } title={item.title}  />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLDetailScreenHead;
