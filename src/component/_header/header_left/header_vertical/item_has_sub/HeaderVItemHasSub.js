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
function HeaderVItemHasSub({ item: { Icon, x, y, title, sub_list } }) {
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
            <h2
                className={`HeaderVItemHasSub_title margin-0 font-16px cursor-pointer ${
                    open_list ? 'HeaderVItemHasSub_title-active' : ''
                }`}
                onClick={toggleOpenList}
            >
                <ArrowAndString open_list={open_list} size_icon="0.8rem">
                    {Icon ? (
                        <IconDiv
                            Icon={Icon}
                            x={x}
                            y={y}
                            color={
                                open_list ? 'var(--base-seafoam)' : undefined
                            }
                        >
                            {title}
                        </IconDiv>
                    ) : (
                        title
                    )}
                </ArrowAndString>
            </h2>

            <ul
                className={`HeaderVItemHasSub_list list-none ${
                    open_list
                        ? 'HeaderVItemHasSub_list-open'
                        : 'HeaderVItemHasSub_list-hidden'
                }`}
            >
                {sub_list.map((item, ix) => (
                    <li
                        className="HeaderV__item HeaderVItemHasSub_item bg-fb"
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
