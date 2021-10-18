import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../component/_screen/type/with_elm/ScreenWithElm';
//
import PLChooseAddressScreen from '../../phone_laptop/components/choose_address/_screen/PLChooseAddressScreen';

//
LearnPLChooseAddress.propTypes = {};

//
function LearnPLChooseAddress(props) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    // ------

    //
    function handleChangeAddress(params) {
        console.log(params);
        closeScreenFloor();
    }

    //
    function openChooseAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <PLChooseAddressScreen
                    handleChangeAddress={handleChangeAddress}
                    closeScreen={closeScreenFloor}
                />
            ),
        });
    }

    //
    return (
        <div>
            <div
                className="font-700 cursor-pointer"
                onClick={openChooseAddress}
            >
                Open PL Choose Address
            </div>
        </div>
    );
}

export default LearnPLChooseAddress;
