import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemUser from '../user/GPMemUser';
import GPMemPage from '../page/GPMemPage';

//
GPMemUserPage.propTypes = {};

//
function GPMemUserPage({
    group_id,
    has_action_other,
    item,

    use_title,
    handleAction,
}) {
    //
    if (item.type_user == 'person') {
        return (
            <GPMemUser
                group_id={group_id}
                has_action_other={has_action_other}
                member_user_obj={item}
                use_title={use_title}
                handleAction={handleAction}
            />
        );
    }

    //
    return (
        <GPMemPage
            group_id={group_id}
            has_action_other={has_action_other}
            member_page_obj={item}
            use_title={use_title}
            handleAction={handleAction}
        />
    );
}

export default GPMemUserPage;
