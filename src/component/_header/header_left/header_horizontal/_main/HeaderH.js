import React from 'react';
//
import { data_menu_left } from '../../_data/HeaderLeftData';
// 
import './HeaderHCommon.scss';
// 
import HeaderHItem from '../item/HeaderHItem';
import HeaderHItemHasSub from '../item_has_sub/HeaderHItemHasSub';
//
import './HeaderH.scss';

//
function HeaderH() {
    //
    return (
        <div className="HeaderH">
            <ul className="HeaderH__ul list-none display-flex">
                {data_menu_left.map((item, ix) => (
                    <li key={`HeaderH_item_${ix}`}>
                        {!item.has_sub ? (
                            <HeaderHItem item={item} />
                        ) : (
                            <HeaderHItemHasSub
                                item={item}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderH;
