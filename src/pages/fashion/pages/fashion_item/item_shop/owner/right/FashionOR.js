import React from 'react';
import PropTypes from 'prop-types';

import './FashionOR.scss';

//
FashionOR.propTypes = {};

// 
function FashionOR({ owner_info }) {

    //
    return (
        <div>
            <div className="FashionOR_row">
                {owner_info.map((info, info_ix) => (
                    <div key={`FashionOR_${info_ix}`} className="FashionOR_col">
                        <span className="FashionOR_col-title">
                            {info.title}:
                        </span>
                        <span className="text-red">{info.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionOR;
