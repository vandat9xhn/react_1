import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import './FashionOL.scss';

//
FashionOL.propTypes = {};

//
function FashionOL({ id, picture, name, time_online }) {
    //
    return (
        <div className="FashionOL">
            <div className="FashionOL_row display-flex">
                <div className="FashionOL_col">
                    <div>
                        <Link to={`/fashion/shop/${id}`}>
                            <img
                                src={picture}
                                alt=""
                                width="100"
                                height="100"
                            />
                        </Link>
                    </div>
                </div>

                <div className="FashionOL_col">
                    <Link to={`/fashion/shop/${id}`} className="normal-text">
                        <div>{name}</div>
                    </Link>

                    <div>{UnitTime(time_online)}</div>
                </div>
            </div>
        </div>
    );
}

export default FashionOL;
