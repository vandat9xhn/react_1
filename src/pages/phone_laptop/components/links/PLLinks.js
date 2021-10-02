import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';
//
import './PLLinks.scss';

//
PLLinks.propTypes = {};

//
function PLLinks({ link_arr, class_main, class_row, class_item }) {
    //
    return (
        <div className={`PLLinks ${class_main}`}>
            <div className={`PLLinks_row display-flex ${class_row}`}>
                {link_arr.map((item, ix) => (
                    <Link
                        key={ix}
                        to={item.link_to}
                        className={`PLLinks_item padding-x-10px padding-y-5px border-blur color-inherit hv-cl-blue ${class_item}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PLLinks;
