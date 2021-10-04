import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import PLHeadPc from '../pc/_main/PLHeadPc';
import PLHeadMb from '../mobile/_main/PLHeadMb';

//
PLHead.propTypes = {};

//
function PLHead(props) {
    //
    function handleChangeAddress() {
        console.log('Address');
    }

    //
    return (
        <div className="PLHead font-for-phone">
            <div>
                {IS_MOBILE ? (
                    <PLHeadMb
                        province="Hà Nội"
                        handleChangeAddress={handleChangeAddress}
                    />
                ) : (
                    <PLHeadPc
                        province="Hà Nội"
                        handleChangeAddress={handleChangeAddress}
                    />
                )}
            </div>
        </div>
    );
}

export default PLHead;
