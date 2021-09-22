import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import FavWithLetter from '../../../../../component/fav_with_letter/FavWithLetter';
//
import './FashionHL.scss';

//
FashionHL.propTypes = {};

//
function FashionHL(props) {
    //
    return (
        <div className="FashionHL">
            <div className="display-flex-center">
                <Link to="/fashion">
                    <FavWithLetter letter="S" class_letter="color-fashion" />
                </Link>
            </div>
        </div>
    );
}

export default FashionHL;
