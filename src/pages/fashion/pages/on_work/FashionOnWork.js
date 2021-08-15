import React from 'react';
import PropTypes from 'prop-types';
// 
import FashionH from '../../components/head/_main/FashionH';
import FashionLN from '../../components/banner/list_names/FashionLN';
//
import './FashionOnWork.scss';

// 
FashionOnWork.propTypes = {};

function FashionOnWork(props) {
    return (
        <div className="FashionOnWork">
            <FashionH />
            <FashionLN />

            <div className="FashionOnWork_contain">
                <div className="FashionOnWork_row">
                    <div className="font-700 text-secondary font-18px">
                        I am working on it
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionOnWork;
