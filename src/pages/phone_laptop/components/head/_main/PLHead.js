import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { openScreenWithElm } from '../../../../../component/_screen/type/with_elm/ScreenWithElm';
//
import PLChooseAddressScreen from '../../choose_address/_screen/PLChooseAddressScreen';
//
import PLHeadPc from '../pc/_main/PLHeadPc';
import PLHeadMb from '../mobile/_main/PLHeadMb';

//
PLHead.propTypes = {};

//
function PLHead(props) {
    //
    useParams();

    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const address = localStorage.pl_address || 'Hà Nội';

    //
    function openChangeAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: <PLChooseAddressScreen closeScreen={closeScreenFloor} />,
        });
    }

    //
    if (location.pathname.search('/phone') < 0) {
        return null;
    }

    //
    return (
        <div className="PLHead font-for-phone">
            <div>
                {IS_MOBILE ? (
                    <PLHeadMb
                        address={address}
                        handleChangeAddress={openChangeAddress}
                    />
                ) : (
                    <PLHeadPc
                        address={address}
                        handleChangeAddress={openChangeAddress}
                    />
                )}
            </div>
        </div>
    );
}

export default PLHead;
