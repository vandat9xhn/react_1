import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './GPMediaPicsItem.scss';

//
GPMediaPicsItem.propTypes = {};

//
function GPMediaPicsItem({ img, link_to, children }) {
    //
    return (
        <Link
            className="GPMediaPicsItem display-block h-100per brs-8px color-inherit hv-after-shadow-05"
            to={link_to}
        >
            <div className="padding-top-100per pos-rel">
                <img
                    className="pos-abs-100 brs-8px border-blur object-fit-cover"
                    src={img}
                    alt=""
                />
            </div>

            <div className="GPMediaPicsItem_title">{children}</div>
        </Link>
    );
}

export default GPMediaPicsItem;
