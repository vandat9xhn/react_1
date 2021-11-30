import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageTopicAction from '../../../../../../_components/topic_action/GroupPageTopicAction';

//
GPDTopicAction.propTypes = {};

//
function GPDTopicAction({ ix, is_hidden, handleAction }) {
    //
    return (
        <div className="GPDTopicAction">
            <GroupPageTopicAction
                ix={ix}
                is_hidden={is_hidden}
                handleAction={handleAction}
            />
        </div>
    );
}

export default GPDTopicAction;
