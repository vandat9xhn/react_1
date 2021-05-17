import React from 'react';
import PropTypes from 'prop-types';

import './FashionOnWork.scss';
import FashionH from '../../components/head/_main/FashionH';
import FashionLN from '../../components/banner/list_names/FashionLN';
//
FashionOnWork.propTypes = {
    
};

function FashionOnWork(props) {
    return (
        <div className="FashionOnWork">
            <FashionH />
            <FashionLN />

            <div className="FashionOnWork_contain">
                <div className="FashionOnWork_row">
                    <div className="fashion_title">I am working on it</div>
                </div>
            </div>
        </div>
    );
}

export default FashionOnWork;