import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './SubList.scss';

//
SubList.propTypes = {};

//
function SubList({
    active_ix,
    item_ix,
    sub_list,
    title,
    handleChangeActiveIx,
}) {
    //
    function onChangeActiveIx() {
        handleChangeActiveIx(item_ix);
    }

    //
    return (
        <div className="SubList">
            <h3
                className="padding-8px margin-0 cursor-pointer"
                onClick={onChangeActiveIx}
            >
                {title}
            </h3>

            <div className="SubList_contain">
                <ul
                    className={`SubList_list list-none bg-fb ${
                        active_ix == item_ix ? 'SubList_show' : 'SubList_hidden'
                    }`}
                >
                    {sub_list.map((sub_item, sub_ix) => (
                        <li key={`SubList_${sub_ix}`}>
                            <NavLink
                                className="normal-text text-secondary label-field"
                                activeClassName="color-fashion"
                                to={`/fashion/personal${sub_item.link}`}
                                replace
                            >
                                <h4 className="SubList_title padding-8px margin-0">
                                    {sub_item.title}
                                </h4>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SubList;
