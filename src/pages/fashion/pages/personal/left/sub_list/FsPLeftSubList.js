import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './FsPLeftSubList.scss';

//
FsPLeftSubList.propTypes = {};

//
function FsPLeftSubList({ is_show, sub_list }) {
    //
    return (
        <div
            className={`FsPLeftSubList ${
                is_show ? 'FsPLeftSubList-show' : 'FsPLeftSubList-hide'
            }`}
        >
            {sub_list.map((item, ix) => (
                <NavLink
                    key={ix}
                    className="text-third font-400"
                    activeClassName="color-fashion"
                    to={`/fashion/user/${item.link}`}
                >
                    <div className="FsPLeftSubList_title padding-5px">
                        {item.title}
                    </div>
                </NavLink>
            ))}
        </div>
    );
}

export default FsPLeftSubList;
