import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import './SubList.scss';

//
SubList.propTypes = {};

//
function SubList({active_ix, item_ix, sub_list, title, handleChangeActiveIx}) {

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

            <ul
                className={`SubList_list list-none ${
                    active_ix == item_ix ? 'SubList_show' : 'SubList_hidden'
                }`}
            >
                {sub_list.map((sub_item, sub_ix) => (
                    <li key={`SubList_${sub_ix}`}>
                        <NavLink
                            className="normal-text text-secondary label-field"
                            activeClassName="text-blue"
                            to={`/fashion/personal${sub_item.link}`}
                            replace
                        >
                            <h4 className="padding-8px margin-0">
                                {sub_item.title}
                            </h4>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubList;
