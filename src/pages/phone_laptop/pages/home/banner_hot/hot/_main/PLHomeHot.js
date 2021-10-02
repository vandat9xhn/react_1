import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
PLHomeHot.propTypes = {};

//
function PLHomeHot({ hot_arr }) {
    //
    return (
        <div className="PLHomeHot">
            <ul className="PLHomeHot_row display-flex flex-wrap list-none">
                {hot_arr.map((item, ix) => (
                    <li key={item.id} className="PLHomeHot_item w-50per margin-bottom-10px padding-left-10px">
                        <Link to={item.link_to}>
                            <img
                                className="brs-4px object-fit-cover"
                                src={item.img}
                                alt=""
                                width="170"
                                height="170"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLHomeHot;
