import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';

import { VideoOrImage } from '../../../../../../_some_function/VideoOrImage';
//
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import Textarea from '../../../../../input/textarea/Textarea';
//
import './FixItem.scss';

//
FixItem.propTypes = {
    ix: PropTypes.number,
    vid_pic: PropTypes.string,
    content: PropTypes.string,

    handleChangeContentVidPic: PropTypes.func,
    deleteAnItem: PropTypes.func,
};

//
function FixItem({
    ix,
    content,
    vid_pic,

    deleteAnItem,
    handleChangeContentVidPic,
}) {
    //
    const { openScreenConfirm } = useContext(context_api);

    //
    const [open_content, setOpenContent] = useState(!!content);
    const [is_editing, setIsEditing] = useState(false);

    /* ---------------------------- ITEM ---------------------------------- */

    //
    function toggleOpenContent() {
        setOpenContent(!open_content);
    }

    //
    function onBlur() {
        setIsEditing(false);
    }

    //
    function handleFocus() {
        setIsEditing(true);
    }

    function onChangeContentVidPic(new_content) {
        handleChangeContentVidPic(new_content, ix);
    }

    /* ---------------------------- DEL ---------------------------------- */

    //
    function openConfirm() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this?',
            handleDeleteItem
        );
    }

    //
    function handleDeleteItem() {
        deleteAnItem(ix);
    }

    //
    return (
        <div className="FixItem">
            <div className="FixItem_pic margin-auto">
                {VideoOrImage(vid_pic)}
            </div>

            <div className="FixItem_choice">
                <div className="FixItem__tag" title="Tag your friends">
                    <IconsPost />
                </div>

                <div
                    className="FixItem__add-content"
                    onClick={toggleOpenContent}
                    title="Add content"
                >
                    <IconsEdit is_editing={is_editing} />
                </div>
            </div>

            <div
                className={`FixItem_content ${
                    open_content ? '' : 'display-none'
                }`}
            >
                <Textarea
                    text={content}
                    placeholder="Write something..."
                    textarea_class="FixItem_content-textarea scroll-thin"
                    //
                    onChange={onChangeContentVidPic}
                    handleFocus={handleFocus}
                    handleBlur={onBlur}
                />
            </div>

            <div className="FixItem_delete">
                <div
                    className="FixItem_delete_item close-icon-small brs-50 cursor-pointer hv-opacity"
                    title="Delete"
                    onClick={openConfirm}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default FixItem;
