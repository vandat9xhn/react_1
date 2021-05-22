import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ArrowAndString from '../../../../some_div/arrow_div/ArrowAndString';
import HeaderVItem from '../item/HeaderVItem';
//
import './HeaderVItemHasSub.scss';

//
HeaderVItemHasSub.propTypes = {};

//
function HeaderVItemHasSub({ title, sub_list }) {
    const [open_list, setOpenList] = useState(false);

    //
    function toggleOpenList(e) {
        e.stopPropagation();
        setOpenList(!open_list);
    }

    //
    return (
        <div className="HeaderVItemHasSub">
            <div className="padding-8px label-field" onClick={toggleOpenList}>
                <ArrowAndString open_list={open_list} size_icon="0.8rem">
                    {title}
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
