import React from 'react';
import PropTypes from 'prop-types';
//
import HeaderHItem from '../item/HeaderHItem';
//
import './HeaderHItemHasSub.scss';

//
HeaderHItemHasSub.propTypes = {};

//
function HeaderHItemHasSub({ title, sub_list }) {
    return (
        <div className="HeaderHItemHasSub position-rel">
            <div className="HeaderH_item header_item">
                {title}
            </div>

            <div className="HeaderHItemHasSub_sub header_hidden">
                <div className="header_hidden-contain">
                    <ul className="list-none">
                        {sub_list.map((item, ix) => (
                            <li key={`HeaderHItemHasSub_item_${ix}`}>
                                <HeaderHItem item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderHItemHasSub;
