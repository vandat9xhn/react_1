import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionMallItem.scss';

//
FashionMallItem.propTypes = {};

//
function FashionMallItem({ img, title }) {
    //
    return (
        <div className="FashionMallItem display-flex flex-col wh-100">
            <div className="FashionMallItem_head flex-grow-1">
                <img className="wh-100 object-fit-cover" src={img} alt="" />
            </div>

            <div className="FashionMallItem_foot">
                <span className="font-18px">{title}</span>
            </div>
        </div>
    );
}

export default FashionMallItem;
