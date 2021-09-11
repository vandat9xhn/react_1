import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './FsSRowTitleMorePc.scss';

//
FsSRowTitleMorePc.propTypes = {};

//
function FsSRowTitleMorePc({ more_title_arr }) {
    //
    return (
        <div className="FsSRowTitleMorePc pos-rel bg-primary box-shadow-fb brs-5px">
            <div className="FsSRowTitleMorePc_contain overflow-y-auto">
                {more_title_arr.map((item, ix) => (
                    <Link
                        key={ix}
                        to={`/fashion/${item.link_to}`}
                        className="FsSRowTitleMorePc_item normal-text"
                    >
                        <div className="padding-10px">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FsSRowTitleMorePc;
