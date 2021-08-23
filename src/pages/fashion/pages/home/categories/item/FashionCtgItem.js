import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './FashionCtgItem.scss';

//
FashionCtgItem.propTypes = {};

//
function FashionCtgItem({ item_obj }) {
    //
    const { link_to, img, title } = item_obj;

    //
    return (
        <Link to={link_to} className="FashionCtgItem wh-100 normal-text">
            <div className="FashionCtgItem_contain display-flex flex-col wh-100">
                <div className="FashionCtgItem_head flex-grow-1 display-flex-center">
                    <img
                        className="FashionCtgItem_head_img object-fit-cover"
                        src={img}
                        alt=""
                    />
                </div>

                <div className="FashionCtgItem_foot padding-4px text-align-center">
                    <span className="text-secondary font-14px">{title}</span>
                </div>
            </div>
        </Link>
    );
}

export default FashionCtgItem;
