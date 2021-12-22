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
                <Link
                    className="text-white font-600 font-18px font-italic"
                    to="/fashion"
                >
                    <div className="display-flex-center">
                        <FavWithLetter
                            letter="S"
                            class_letter="color-fashion"
                        />

                        <div className="margin-left-8px">Fashion</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default FashionHL;
