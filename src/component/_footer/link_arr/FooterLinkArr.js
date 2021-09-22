import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FooterLinkArr.propTypes = {};

//
function FooterLinkArr({ title, link_arr, target }) {
    //
    return (
        <div className="FooterLinkArr">
            <div className="margin-y-20px text-upper font-600">{title}</div>

            <ul className="list-none">
                {link_arr.map((item, ix) => (
                    <li key={ix}>
                        <Link
                            className="color-inherit hv-cl-fashion"
                            to={item.link_to}
                            target={target}
                        >
                            <div className="margin-bottom-10px">
                                {item.name}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinkArr;
