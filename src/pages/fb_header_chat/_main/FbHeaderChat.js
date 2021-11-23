import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import FbHeaderChatMb from '../mobile/_main/FbHeaderChatMb';

//
FbHeaderChat.propTypes = {};

//
function FbHeaderChat(props) {
    //
    return IS_MOBILE ? <FbHeaderChatMb /> : null;
}

export default FbHeaderChat;
