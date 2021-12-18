import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import ActionPreviewProfile from '../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
import ActionPreviewPage from '../../../../../component/action_preview_page/_main/ActionPreviewPage';
import PictureNameCommon from '../../../../../component/picture_name/_main/PictureNameCommon';

//
NewFeedContactItem.propTypes = {};

//
function NewFeedContactItem({ item }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function handleClick() {
        openRoomChat(item.id);
    }

    //
    return item.user_type == 'person' ? (
        <ActionPreviewProfile
            user_id={item.id}
            title_action={
                <div className="NewFeed_side_item" onClick={handleClick}>
                    <PictureNameCommon
                        name={`${item.first_name} ${item.last_name}`}
                        picture={item.picture}
                        use_time_online={true}
                        time_online={item.time_online}
                        use_new_story={true}
                        has_new_story={item.has_new_story}
                    />
                </div>
            }
            pos_orientation="x"
            x_always="right"
        />
    ) : (
        <ActionPreviewPage
            title_action={
                <div className="NewFeed_side_item" onClick={handleClick}>
                    <PictureNameCommon
                        name={item.name}
                        picture={item.picture}
                        use_time_online={true}
                        time_online={item.time_online}
                        use_new_story={true}
                        has_new_story={item.has_new_story}
                    />
                </div>
            }
            page_id={item.id}
            pos_orientation="x"
            x_always="right"
        />
    );
}

export default NewFeedContactItem;
