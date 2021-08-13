import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { SCALE_PIC_RATIO } from '../../../../../../_constant/Constant';
//
import { initial_user } from '../../../../../../_initial/user/initialUser';
import {
    data_story_effect_arr,
    data_story_tag_bg_color_arr,
} from '../../../../../../_data/story/text';
//
import StoryIconCloseMb from '../../../../_components/create/mobile/icon_close/StoryIconCloseMb';
import StoryBtnPrivacyMb from '../../../../_components/create/mobile/privacy/StoryBtnPrivacyMb';
import StoryBtnShareMb from '../../../../_components/create/mobile/btn_share/StoryBtnShareMb';
import StoryCPTextMb from '../text/StoryCPTextMb';
import StoryCPPicMb from '../pic/StoryCPPicMb';
import StoryCPActionsMb from '../actions/StoryCPActionsMb';
import StoryCPAddTextMb from '../add_text/StoryCPAddTextMb';
import StoryCPEffectPicMb from '../effect_pic/StoryCPEffectPicMb';
import StoryCPTagFriendItemMb from '../tag_friend/tag/StoryCPTagFriendItemMb';
import StoryCPAddTagFriendMb from '../tag_friend/add/_main/StoryCPAddTagFriendMb';

//
StoryCreatePicMb.propTypes = {};

//
function StoryCreatePicMb({
    vid_pic,
    openPrivacy,
    handleCreateStory,
    handleDiscard,
}) {
    //
    const [state_obj, setStateObj] = useState({
        story_width: 0,

        vid_pic_obj: {
            vid_pic: vid_pic,
            effect_ix: 0,
            effect: data_story_effect_arr[0],
            trans_x: 0,
            trans_y: 0,
            scale: 0.3,
            rotate: 0, // 0 90 180 270
        },

        text_obj: {
            text: '',
            trans_x: 0,
            trans_y: 0,
            rotate: 0,
            scale: 1,
        },

        tag_user_arr: [] || [
            {
                user: initial_user(),
                bg_color_ix: 0,
                ...data_story_tag_bg_color_arr[0],
                trans_x: 0,
                trans_y: 0,
                rotate: 0,
                scale: 1,
            },
        ],

        open_add_text: false,
        open_effect_pic: false,
        open_add_friend: false,
    });

    const {
        vid_pic_obj,
        text_obj,
        tag_user_arr,

        open_add_text,
        open_effect_pic,
        open_add_friend,
    } = state_obj;

    const bg_pic = '';

    /* ------- PIC ------- */

    //
    function openEffectPic() {
        setStateObj({
            ...state_obj,
            open_effect_pic: true,
        });
    }

    //
    function closeEffectPic() {
        setStateObj({
            ...state_obj,
            open_effect_pic: false,
        });
    }

    //
    function handleChangeEffectPic(new_effect_ix) {
        setStateObj((state_obj) => {
            const new_vid_pic_obj = { ...state_obj.vid_pic_obj };
            new_vid_pic_obj.effect_ix = new_effect_ix;
            new_vid_pic_obj.effect = data_story_effect_arr[new_effect_ix];

            return {
                ...state_obj,
                vid_pic_obj: new_vid_pic_obj,
            };
        });
    }

    //
    function handleMovePic({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                vid_pic_obj: {
                    ...state_obj.vid_pic_obj,
                    trans_x: state_obj.vid_pic_obj.trans_x + client_x_change,
                    trans_y: state_obj.vid_pic_obj.trans_y + client_y_change,
                },
            };
        });
    }

    //
    function handleResizePic({ client_change }) {
        setStateObj((state_obj) => {
            const new_vid_pic_obj = { ...state_obj.vid_pic_obj };
            new_vid_pic_obj.scale = +client_change / SCALE_PIC_RATIO;

            return {
                ...state_obj,
                vid_pic_obj: new_vid_pic_obj,
            };
        });
    }

    /* ----- TEXT ----- */

    //
    function openAddText() {
        setStateObj({
            ...state_obj,
            open_add_text: true,
        });
    }

    //
    function closeAddText() {
        setStateObj({
            ...state_obj,
            open_add_text: false,
        });
    }

    //
    function handleChangeText(value) {
        setStateObj((state_obj) => {
            const new_text_obj = { ...state_obj.text_obj };
            new_text_obj.text = value;

            return {
                ...state_obj,
                text_obj: new_text_obj,
            };
        });
    }

    //
    function handleMoveText({ client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_text_obj = { ...state_obj.text_obj };

            new_text_obj.trans_x += client_x_change;
            new_text_obj.trans_y += client_y_change;

            return { ...state_obj, text_obj: new_text_obj };
        });
    }

    //
    function handleResizeText({ client_change }) {
        setStateObj((state_obj) => {
            const new_text_obj = { ...state_obj.text_obj };
            new_text_obj.scale = +client_change / SCALE_PIC_RATIO;

            return {
                ...state_obj,
                text_obj: new_text_obj,
            };
        });
    }

    /* ------ TAG ----- */

    //
    function openTagFriend() {
        setStateObj({
            ...state_obj,
            open_add_friend: true,
        });
    }

    //
    function closeTagFriend() {
        setStateObj({
            ...state_obj,
            open_add_friend: false,
        });
    }

    //
    function handleTagFriend(tag_user = {}) {
        setStateObj({
            ...state_obj,
            tag_user_arr: [
                ...state_obj.tag_user_arr,
                {
                    user: tag_user,
                    bg_color_ix: 0,
                    ...data_story_tag_bg_color_arr[0],
                    trans_x: 0,
                    trans_y: 0,
                    rotate: 0,
                    scale: 1,
                },
            ],
            open_add_friend: false,
        });
    }

    //
    function handleMoveTagFriend({ ix, client_x_change, client_y_change }) {
        setStateObj((state_obj) => {
            const new_tag_user_arr = [...state_obj.tag_user_arr];

            new_tag_user_arr[ix].trans_x += client_x_change;
            new_tag_user_arr[ix].trans_y += client_y_change;

            return { ...state_obj, tag_user_arr: new_tag_user_arr };
        });
    }

    //
    function handleResizeTagFriend({ ix, client_change }) {
        setStateObj((state_obj) => {
            const new_tag_user_arr = [...state_obj.tag_user_arr];
            new_tag_user_arr[ix].scale = +client_change / SCALE_PIC_RATIO;

            return {
                ...state_obj,
                tag_user_arr: new_tag_user_arr,
            };
        });
    }

    //
    function changeBgColorIx(ix) {
        setStateObj((state_obj) => {
            const new_tag_user_arr = [...state_obj.tag_user_arr];
            const new_bg_color_ix =
                (new_tag_user_arr[ix].bg_color_ix + 1) %
                data_story_tag_bg_color_arr.length;

            new_tag_user_arr[ix].bg_color_ix = new_bg_color_ix;
            new_tag_user_arr[ix].bg =
                data_story_tag_bg_color_arr[new_bg_color_ix].bg;
            new_tag_user_arr[ix].color =
                data_story_tag_bg_color_arr[new_bg_color_ix].color;

            return {
                ...state_obj,
                tag_user_arr: new_tag_user_arr,
            };
        });
    }

    //
    function handleDelTagFriend(tag_user_ix) {
        const new_tag_user_arr = [...tag_user_arr];
        new_tag_user_arr.splice(tag_user_ix, 1);

        setStateObj({
            ...state_obj,
            tag_user_arr: new_tag_user_arr,
        });
    }

    /* ------ CREATE ----- */

    //
    function onCreateStory() {
        handleCreateStory(state_obj);
    }

    //
    return (
        <div className="StoryCreatePicMb wh-100 pos-rel overflow-hidden">
            <img
                src={vid_pic}
                alt=""
                className="wh-100"
                style={{ filter: `blur(100px)` }}
            />

            <StoryCPPicMb
                vid_pic_obj={vid_pic_obj}
                handleResizePic={handleResizePic}
                handleMovePic={handleMovePic}
            />

            {open_add_text ? (
                <div className="pos-abs-100 z-index-lv1">
                    <div
                        className="pos-abs-100 bg-loader"
                        onClick={closeAddText}
                    ></div>

                    <StoryCPAddTextMb
                        text={text_obj.text}
                        handleChange={handleChangeText}
                    />

                    <div className="pos-abs right-0 bottom-0">
                        <div className="padding-4px" onClick={closeAddText}>
                            <span className="label-field text-white">Done</span>
                        </div>
                    </div>
                </div>
            ) : text_obj.text.trim() ? (
                <StoryCPTextMb
                    text_obj={text_obj}
                    openChangeText={openAddText}
                    handleResizeText={handleResizeText}
                    handleMoveText={handleMoveText}
                />
            ) : null}

            {tag_user_arr.map((tag_user_obj, ix) => (
                <StoryCPTagFriendItemMb
                    key={`${tag_user_obj.user.id}`}
                    ix={ix}
                    tag_user_obj={tag_user_obj}
                    //
                    changeBgColorIx={changeBgColorIx}
                    handleDelTag={handleDelTagFriend}
                    handleResizeTag={handleResizeTagFriend}
                    handleMoveTag={handleMoveTagFriend}
                />
            ))}

            <div className="pos-abs right-0 top-0">
                <StoryCPActionsMb
                    openAddText={openAddText}
                    openEffectPic={openEffectPic}
                    openTagFriend={openTagFriend}
                />
            </div>

            <div className="pos-abs left-0 top-0">
                <StoryIconCloseMb handleDiscard={handleDiscard} />
            </div>

            <div className="pos-abs left-0 bottom-0">
                <StoryBtnPrivacyMb openPrivacy={openPrivacy} />
            </div>

            <div className="pos-abs right-0 bottom-0">
                <div className="padding-4px">
                    <StoryBtnShareMb
                        can_share={true}
                        handleCreateStory={onCreateStory}
                    />
                </div>
            </div>

            {open_add_friend ? (
                <div className="pos-abs-100">
                    <div
                        className="pos-abs-100 bg-loader"
                        onClick={closeTagFriend}
                    ></div>

                    <div className="pos-abs-100">
                        <StoryCPAddTagFriendMb
                            handleTagFriend={handleTagFriend}
                        />
                    </div>

                    <div
                        className="pos-abs right-0 bottom-0"
                        onClick={closeTagFriend}
                    >
                        <div className="padding-4px">
                            <span className="text-white label-field">Done</span>
                        </div>
                    </div>
                </div>
            ) : null}

            {open_effect_pic ? (
                <div className="pos-abs-100">
                    <div
                        className="pos-abs-100 bg-loader"
                        onClick={closeEffectPic}
                    ></div>

                    <StoryCPEffectPicMb
                        pic={vid_pic}
                        effect_arr={data_story_effect_arr}
                        effect_ix={vid_pic_obj.effect_ix}
                        handleChangeEffectPic={handleChangeEffectPic}
                    />

                    <div
                        className="pos-abs right-0 top-0"
                        onClick={closeEffectPic}
                    >
                        <div className="padding-4px">
                            <span className="text-white label-field">Done</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default StoryCreatePicMb;
