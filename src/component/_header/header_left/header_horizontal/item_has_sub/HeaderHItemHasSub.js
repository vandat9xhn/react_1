import React from 'react';
import PropTypes from 'prop-types';
//
import HeaderHItem from '../item/HeaderHItem';
//
import './HeaderHItemHasSub.scss';

//
HeaderHItemHasSub.propTypes = {};

//
function HeaderHItemHasSub({ item }) {
    //
    const { Icon, x, y, title, sub_list } = item;

    //
    return (
        <div className="HeaderHItemHasSub position-rel">
            <div className="HeaderHItemHasSub_icon HeaderH_item header_item header_item_horizontal">
                {Icon ? <Icon x={x} y={y} size_icon="1.8rem" /> : title}
            </div>

            <div className="HeaderHItemHasSub_sub header_hidden left-0">
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
