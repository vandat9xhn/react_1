import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsMultiList from '../../../../../actions_multi_list/_main/ActionsMultiList';
//
import './ZoomVidPicAction.scss';

//
ZoomVidPicAction.propTypes = {};

//
function ZoomVidPicAction({ video_or_img, handleAction }) {
    //
    function handle_API_L() {
        if (video_or_img == 'img') {
            return [
                [
                    {
                        name: 'save_post',
                        title: 'Save Post',
                        info: 'Add this to your saved item',
                    },
                ],
                [
                    { name: 'history', title: 'View edit history' },
                    { name: 'audience', title: 'Edit post audience' },
                    { name: 'edit_alt', title: 'Change alt text' },
                    { name: 'delete', title: 'Delete photo' },
                ],
                [{ name: 'report', title: 'Find support or report photo' }],
            ];
        }

        return [
            [
                {
                    name: 'save_video',
                    title: 'Save Video',
                    info: 'Add this to your saved item',
                },
            ],
            [
                { name: 'history', title: 'View edit history' },
                { name: 'audience', title: 'Edit post audience' },
                { name: 'edit_alt', title: 'Change alt text' },
                { name: 'delete', title: 'Delete video' },
            ],
            [{ name: 'report', title: 'Find support or report video' }],
        ];
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
