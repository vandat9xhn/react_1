import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsStar from '../../../../../_icons_svg/icons_star/IconsStar';
//
import './PLBarsRateItem.scss';

//
PLBarsRateItem.propTypes = {};

//
function PLBarsRateItem({ product_id, star_num, percent }) {
    //
    return (
        <div className="PLBarsRateItem">
            <div className="PLBarsRateItem_row display-flex align-items-center">
                <div className="PLBarsRateItem_star">
                    <span className="margin-right-3px">{star_num}</span>

                    <IconsStar size_icon="12px" color="currentColor" />
                </div>

                <div className="PLBarsRateItem_bar pos-rel flex-grow-1">
                    <div className="pos-abs-100 bg-ccc"></div>

                    <div
                        className="pos-abs left-0 top-0 h-100per bg-star"
                        style={{ width: `${percent}%` }}
                    ></div>
                </div>

                <Link
                    to={`/phone-laptop/rate?s=${star_num}&product_id=${product_id}`}
                    className="PLBarsRateItem_percent text-align-end"
                >
                    {percent}%
                </Link>
            </div>
        </div>
    );
}

export default PLBarsRateItem;
