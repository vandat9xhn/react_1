import React from 'react';
import PropTypes from 'prop-types';
// 
import IconDiv from '../../../../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';

// 
CaseSendRequest.propTypes = {
    
};

// 
function CaseSendRequest(props) {
    const {handleCancelRequest} = props;
    
    // 
    return (
        <div onClick={handleCancelRequest}>
            <IconDiv Icon={IconsAction} y={200}>
                Cancel request
            </IconDiv>
        </div>
    );
}

export default CaseSendRequest;