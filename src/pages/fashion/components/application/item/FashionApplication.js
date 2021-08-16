import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FashionApplicationItem.propTypes = {};

//
function FashionApplicationItem({ application_obj }) {
    //
    const { link_to, img, title } = application_obj;

    //
    return (
        <Link to={link_to}>
            <div>
                <img src={img} alt="" width="45" height="45" />
            </div>

            <div>
                <span className="font-13px">{title}</span>
            </div>
        </Link>
    );
}

export default FashionApplicationItem;
