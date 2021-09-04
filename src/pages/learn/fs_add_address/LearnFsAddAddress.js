import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenWithElm } from '../../../component/_screen/type/with_elm/ScreenWithElm';
// 
import LearnFsAAScreen from './LearnFsAAScreen';

//
LearnFsAddAddress.propTypes = {};

//
function LearnFsAddAddress(props) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    function handleBack() {
        closeScreenFloor()
    }

    //
    function handleComplete(data) {
        console.log(data);
        closeScreenFloor()
    }

    //
    function onOpenScreen() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <LearnFsAAScreen
                    title="Chỉnh Sửa Địa Chỉ"
                    old_user_name="Ngoc My"
                    old_phone="0361234567"
                    old_current_address="Hà Nội, Quận Hà Động, Phường La Khê"
                    old_specific="127 Hà Đông"
                    old_type="home"
                    is_default={false}
                    handleBack={handleBack}
                    handleComplete={handleComplete}
                />
            ),
        });
    }

    //
    return (
        <div>
            <div className="cursor-pointer" onClick={onOpenScreen}>
                Open screen add new fashion address
            </div>
        </div>
    );
}

export default LearnFsAddAddress;
