import React from 'react';
import PropTypes from 'prop-types';
//
import BtnPageLike from '../../button/page_actions/like/BtnPageLike';
import BtnPageFollow from '../../button/page_actions/follow/BtnPageFollow';
import BtnPageChat from '../../button/page_actions/chat/BtnPageChat';
import BtnPageContact from '../../button/page_actions/contact/BtnPageContact';
import BtnPageLearnMore from '../../button/page_actions/learn_more/BtnPageLearnMore';

//
ActionsGroupCase.propTypes = {};

//
function ActionsGroupCase({
    action_name,
    use_title,

    page_id,
    has_liked,
    has_followed,

    handleAction,
}) {
    //
    if (action_name == 'like') {
        return (
            <BtnPageLike
                use_title={use_title}
                has_liked={has_liked}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_name == 'follow') {
        return (
            <BtnPageFollow
                use_title={use_title}
                has_followed={has_followed}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_name == 'chat') {
        return <BtnPageChat page_id={page_id} use_title={use_title} />;
    }

    //
    if (action_name == 'contact') {
        return (
            <BtnPageContact use_title={use_title} handleAction={handleAction} />
        );
    }

    //
    if (action_name == 'learn_more') {
        return (
            <BtnPageLearnMore
                use_title={use_title}
                handleAction={handleAction}
            />
        );
    }

    //
    return null;
}

export default ActionsGroupCase;
