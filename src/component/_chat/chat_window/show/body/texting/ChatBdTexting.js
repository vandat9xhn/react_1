import React from 'react';
import PropTypes from 'prop-types';
//
import WaitingBall from '../../../../../waiting/waiting_ball/WaitingBall';

//
ChatBdTexting.propTypes = {};

//
function ChatBdTexting({ is_on_input }) {
    //
    return (
        <div
            className={`ChatBdTexting w-50per brs-10px border-blur ${
                is_on_input ? 'ChatBd_texting-show' : 'ChatBd_texting-hide'
            }`}
        >
            {is_on_input ? <WaitingBall is_fetching={is_on_input} /> : null}
        </div>
    );
}

export default ChatBdTexting;
