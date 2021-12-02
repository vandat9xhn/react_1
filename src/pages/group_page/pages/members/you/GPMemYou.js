import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemUserPage from '../_components/user_page/_main/GPMemUserPage';

//
GPMemYou.propTypes = {};

//
function GPMemYou({ group_id, you_obj }) {
    //
    // function handleAction(action_name = '') {
    //     console.log(action_name);
    // }

    //
    return (
        <div className="GPMemYou">
            <GPMemUserPage
                group_id={group_id}
                has_action_other={true}
                item={you_obj}
                // handleAction={handleAction}
            />
        </div>
    );
}

export default GPMemYou;
