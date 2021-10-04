import React from 'react';
import PropTypes from 'prop-types';
//
import PLHeadTopPc from '../top/_main/PLHeadTopPc';
import PLHeadMenuPc from '../menu/_main/PLHeadMenuPc';
//
import img from '../../../../../../../image/pl_random_pic_head.png';

//
PLHeadPc.propTypes = {};

//
function PLHeadPc({ province, handleChangeAddress }) {
    //
    return (
        <div className="PLHeadPc">
            <div>
                <img className="w-100per object-fit-cover" src={img} alt="" />
            </div>

            <div>
                <PLHeadTopPc
                    province={province}
                    handleChangeAddress={handleChangeAddress}
                />
            </div>

            <div>
                <PLHeadMenuPc />
            </div>
        </div>
    );
}

export default PLHeadPc;
