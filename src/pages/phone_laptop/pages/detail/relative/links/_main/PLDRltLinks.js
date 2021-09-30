import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import PLDRltLinksItem from '../item/PLDRltLinksItem';

//
PLDRltLinks.propTypes = {};

//
function PLDRltLinks({ link_arr }) {
    //
    return (
        <div className="PLDRltLinks">
            <ul className="PLDRltLinks_row display-flex flex-wrap list-none">
                {link_arr.map((item, ix) => (
                    <li
                        key={ix}
                        className="PLDRltLinks_item margin-right-10px margin-bottom-10px"
                    >
                        <Link to={item.link_to} className="color-inherit">
                            <PLDRltLinksItem title={item.title} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLDRltLinks;
