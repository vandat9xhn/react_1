import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_PostVidPicAction_L } from '../../../../../../_handle_api/zoom_vid_pic/actions';
//
import ActionsMultiList from '../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './ZoomVidPicAction.scss';

//
ZoomVidPicAction.propTypes = {};

//
function ZoomVidPicAction({ vid_pic_id, video_or_img, handleAction }) {
    //
    function handle_API_L() {
        return handle_API_PostVidPicAction_L({
            vid_pic_id: vid_pic_id,
            video_or_img: video_or_img,
        });
    }

    //
    return (
        <div className="ZoomVidPicAction">
            <ActionsMultiList
                use_title={true}
                x_always="right"
                //
                handleAction={handleAction}
                handle_API_L={handle_API_L}
            />
        </div>
    );
}

export default ZoomVidPicAction;
