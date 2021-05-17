import React from 'react';
import PropTypes from 'prop-types';

import './FashionOL.scss';
import UnitTime from '../../../../../../_some_function/UnitTime';
import { Link } from 'react-router-dom';
//
FashionOL.propTypes = {
    
};

//
function FashionOL(props) {
    const {id, picture, name, time_online} = props.owner_profile

    return (
        <div className="FashionOL">
            <div className="FashionOL_contain">
                <div className="FashionOL_row">
                    <div className="FashionOL_col">
                        <div>
                            <Link to={`/fashion/shop/${id}`}>
                                <img src={picture} alt="" width="100" height="100"/>
                            </Link>
                        </div>
                    </div>

                    <div className="FashionOL_col">
                        <Link to={`/fashion/shop/${id}`} className="normal-text">
                            <div>{name}</div>
                        </Link>
                        <div>{UnitTime(time_online)}</div>
                        <div>Chat now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionOL;