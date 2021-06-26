import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
// 
import ArrowAndString from '../../../../some_div/arrow_div/ArrowAndString';
import HeaderVItem from '../item/HeaderVItem';
//
import './HeaderVItemHasSub.scss';

//
HeaderVItemHasSub.propTypes = {};

//
function HeaderVItemHasSub({ item }) {
    //
    const { Icon, x, y, title, sub_list } = item;

    //
    const [open_list, setOpenList] = useState(false);

    //
    function toggleOpenList(e) {
        e.stopPropagation();
        setOpenList(!open_list);
    }

    //
    return (
        <div className="HeaderVItemHasSub">
            <div
                className={`padding-8px label-field ${
                    open_list ? 'nav-active text-blue' : ''
                }`}
                onClick={toggleOpenList}
            >
                <ArrowAndString open_list={open_list} size_icon="0.8rem">
                    {Icon ? (
                        <IconDiv Icon={Icon} x={x} y={y}>
                            {title}
                        </IconDiv>
                    ) : (
                        title
                    )}
                </ArrowAndString>
            </div>

            <ul
                className={`HeaderVItemHasSub_list list-none ${
                    open_list
                        ? 'HeaderVItemHasSub_list-open'
                        : 'HeaderVItemHasSub_list-hidden'
                }`}
            >
                {sub_list.map((item, ix) => (
                    <li
                        className="HeaderV__item HeaderVItemHasSub_item"
                        key={`HeaderVItemHasSub_${ix}`}
                    >
                        <HeaderVItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeaderVItemHasSub;
