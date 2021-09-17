import React from 'react';
import PropTypes from 'prop-types';
//
import './FashionPersonalCommon.scss';
// 
import FashionH from '../../../components/head/_main/FashionH';
import PersonalLeft from '../left/_main/FsPersonalLeft';
import FsPersonalRight from '../right/_main/FsPersonalRight';
//
import './FashionPersonal.scss';

//
FashionPersonal.propTypes = {};

//
function FashionPersonal(props) {
    //
    return (
        <div className="FashionPersonal font-for-fashion">
            <FashionH />

            <div className="FashionPersonal_contain fashion-width padding-top-15px">
                <div className="FashionPersonal_row display-flex">
                    <div className="FashionPersonal_left margin-right-20px">
                        <PersonalLeft />
                    </div>

                    <div className="flex-grow-1">
                        <FsPersonalRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionPersonal;
