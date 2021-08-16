import React from 'react';
import PropTypes from 'prop-types';
//
import FashionApplicationItem from '../item/FashionApplication';
// 
import './FashionApplication.scss'

//
FashionApplication.propTypes = {};

//
function FashionApplication({ application_arr }) {
    //
    return (
        <div className="pos-rel overflow-x-auto">
            <div className="display-flex flex-col flex-wrap">
                {application_arr.map((application_obj, ix) => (
                    <div key={ix} className="FashionApplication_item">
                        <FashionApplicationItem {...application_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionApplication;
