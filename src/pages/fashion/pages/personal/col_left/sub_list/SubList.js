import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './SubList.scss';
//
SubList.propTypes = {};

function SubList(props) {
    const { active_ix, item_ix, sub_list, title, handleChangeActiveIx } = props;
    //
    function onChangeActiveIx() {
        handleChangeActiveIx(item_ix);
    }

    //
    return (
        <div className="SubList">
            <div
                className="SubList_block label-field cursor-pointer"
                onClick={onChangeActiveIx}
            >
                {title}
            </div>

            <ul
                className={`SubList_list list-none ${
                    active_ix == item_ix ? 'SubList_show' : 'SubList_hidden'
                }`}
            >
                {sub_list.map((sub_item, sub_ix) => (
                    <li key={`SubList_${sub_ix}`}>
                        <NavLink
                            className="normal-text"
                            activeClassName="text-blue"
                            to={`/fashion/personal${sub_item.link}`}
                            replace
                        >
                            <div className="SubList_block">
                                {sub_item.title}
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubList;
