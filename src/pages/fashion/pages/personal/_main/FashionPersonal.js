import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import './FashionPersonalCommon.scss';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import FsPersonalIconClose from '../icon_close/FsPersonalIconClose';
import FashionH from '../../../components/head/_main/FashionH';
import PersonalLeft from '../left/_main/FsPersonalLeft';
import FsPersonalRight from '../right/_main/FsPersonalRight';
//
import './FashionPersonal.scss';
import './FashionPersonalMobile.scss';

//
FashionPersonal.propTypes = {};

//
function FashionPersonal(props) {
    //
    const { is_true, toggleBool } = useBool();

    //
    useEffect(() => {
        IS_MOBILE && is_true && toggleBool();
    }, [location.pathname]);

    //
    return (
        <div
            className={`FashionPersonal font-for-fashion ${
                IS_MOBILE ? 'FashionPersonal-mobile' : ''
            }`}
        >
            <FashionH />

            {IS_MOBILE ? (
                <div className="flex-end margin-top-10px padding-x-10px">
                    <FsPersonalIconClose
                        is_true={is_true}
                        toggleBool={toggleBool}
                    />
                </div>
            ) : null}

            <div className="FashionPersonal_contain fashion-width padding-top-15px">
                <div className="FashionPersonal_row display-flex">
                    <div
                        className={`FashionPersonal_left flex-shrink-0 margin-right-20px ${
                            is_true ? '' : 'FashionPersonal_left-hide'
                        }`}
                    >
                        <PersonalLeft
                            is_true={is_true}
                            toggleBool={toggleBool}
                        />
                    </div>

                    <div className="FashionPersonal_right flex-grow-1">
                        <FsPersonalRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionPersonal;
