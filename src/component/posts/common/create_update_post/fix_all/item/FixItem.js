import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';

import {
    getTypeVidOrPic,
    VideoOrImage,
} from '../../../../../../_some_function/VideoOrImage';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
//
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
import IconsEdit from '../../../../../../_icons_svg/icons_edit/IconsEdit';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import TextareaCaption from '../../../../../input/textarea_caption/TextareaCaption';
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
    type,

    handleChangeContentVidPic,
    openFixDetail,
    deleteAnItem,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const is_img = getTypeVidOrPic(vid_pic, type) == 'img';

    // -------

    function onChangeContentVidPic(e) {
        handleChangeContentVidPic(e.target.value, ix);
    }

    // -----

    //
    function openConfirm() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this?',
            handleConfirm: handleDeleteItem,
        });
    }

    //
    function handleDeleteItem() {
        deleteAnItem(ix);
    }

    //
    function onOpenFixDetail() {
        openFixDetail(ix);
    }

    //
    return (
        <div className="FixItem brs-8px bg-primary overflow-hidden">
            <div className="pos-rel overflow-hidden">
                <div
                    className={`FixItem_bg pos-abs-100 ${
                        is_img ? 'FixItem_bg-img' : 'bg-shadow-8'
                    }`}
                    style={{
                        backgroundImage: is_img ? `url(${vid_pic})` : undefined,
                    }}
                ></div>

                <div className="FixItem_pic pos-rel display-flex-center">
                    {VideoOrImage(vid_pic, type)}
                </div>

                <div className="FixItem_edit_del display-none">
                    <div
                        className="FixItem_edit pos-abs display-flex-center padding-x-8px padding-y-5px bg-primary brs-4px font-600 cursor-pointer hv-bg-blur"
                        onClick={onOpenFixDetail}
                    >
                        <IconsEdit size_icon="14px" color="currentColor" />

                        <span className="margin-left-5px">Edit</span>
                    </div>

                    <div
                        className="FixItem_delete pos-abs display-flex-center brs-50 border-blur bg-primary cursor-pointer hv-bg-blur"
                        title="Delete"
                        onClick={openConfirm}
                    >
                        <IconsArrow y={400} size_icon="15px" />
                    </div>
                </div>

                <div className="FixItem_tag pos-abs display-flex-center padding-6px bg-shadow-5 line-14px font-600 font-12px text-white cursor-pointer">
                    <IconsPost size_icon="12px" />

                    <div className="FixItem_tag_text display-none margin-left-5px">
                        Tag Photo
                    </div>
                </div>
            </div>

            <div className="FixItem_content padding-8px">
                <TextareaCaption
                    value={content}
                    textarea_class="FixItem_content_textarea padding-x-16px padding-y-3px scroll-thin"
                    onChange={onChangeContentVidPic}
                />
            </div>
        </div>
    );
}

export default FixItem;
