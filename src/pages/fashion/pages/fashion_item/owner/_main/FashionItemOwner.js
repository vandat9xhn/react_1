import React from 'react';
import PropTypes from 'prop-types';
//
import FashionOL from '../left/FashionOL';
import FashionOR from '../right/FashionOR';
//
import './FashionItemOwner.scss';

//
FashionItemOwner.propTypes = {
    ...FashionOL.propTypes,
    ...FashionOR.propTypes,
};

//
function FashionItemOwner({}) {
    //
    return (
        <div className="FashionItemOwner bg-primary">
            <div className="FashionItemOwner_row flex-between-center">
                <div className="FashionItemOwner_left flex-shrink-0">
                    <FashionOL />
                </div>

                <div className="FashionItemOwner_right flex-grow-1">
                    <FashionOR />
                </div>
            </div>
        </div>
    );
}

export default FashionItemOwner;
