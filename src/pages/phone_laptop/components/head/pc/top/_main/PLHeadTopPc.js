import React from 'react';
import PropTypes from 'prop-types';
//
import PLHeadTopRightPc from '../right/PLHeadTopRightPc';
import PLHeadTopLeftPc from '../left/_main/PLHeadTopLeftPc';
// 
import './PLHeadTopPc.scss';

//
PLHeadTopPc.propTypes = {
    ...PLHeadTopLeftPc.propTypes,
};

//
function PLHeadTopPc({ address, handleChangeAddress }) {
    //
    return (
        <div className="PLHeadTopPc bg-black text-align-center line-14px font-12px text-white font-500">
            <div className="PLHeadTopPc_row flex-between-center fashion-width">
                <div className="PLHeadTopPc_left h-100per">
                    <PLHeadTopLeftPc
                        address={address}
                        handleChangeAddress={handleChangeAddress}
                    />
                </div>

                <div className="PLHeadTopPc_right h-100per">
                    <PLHeadTopRightPc />
                </div>
            </div>
        </div>
    );
}

export default PLHeadTopPc;
