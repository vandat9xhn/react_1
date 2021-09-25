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
function PLBarsRateItem({ star_num, percent }) {
    //
    return (
        <div className="PLBarsRateItem">
            <div className="PLBarsRateItem_row display-flex align-items-center">
                <div className="PLBarsRateItem_star">
                    <span>{star_num}</span>

                    <IconsStar size_icon="10px" color="currentColor" />
                </div>

                <div className="PLBarsRateItem_bar pos-rel flex-grow-1">
                    <div className="pos-abs-100 bg-ccc"></div>

                    <div
                        className="pos-abs left-0 h-100per"
                        style={{ width: `${percent}%` }}
                    ></div>
                </div>

                <Link
                    to={`/phone-laptop/rate?s=${star_num}`}
                    className="PLBarsRateItem_percent text-align-end"
                >
                    {percent}%
                </Link>
            </div>
        </div>
    );
}

export default PLBarsRateItem;
