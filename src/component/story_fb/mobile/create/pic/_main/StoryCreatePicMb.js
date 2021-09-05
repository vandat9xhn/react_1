import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { SCALE_PIC_RATIO } from '../../../../../../_constant/Constant';
//
import { initial_user } from '../../../../../../_initial/user/initialUser';
import {
    data_story_effect_arr,
    data_story_pic_edit_mode_arr,
    data_story_tag_bg_color_arr,
} from '../../../../../../_data/story/text';
//
import { getValueHasMinMax } from '../../../../../../_some_function/getValueHasMinMax';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
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
import StoryCPEditPicMb from '../edit_pic/_main/StoryCPEditPicMb';
import StoryRotatePic from '../../../../_components/create/story_pic/rotate/StoryRotatePic';
//
import './StoryCreatePicMb.scss';

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
            mode: data_story_pic_edit_mode_arr[0],
            mode_ix: 0,
            effect: data_story_effect_arr[0],
            effect_ix: 0,
            trans_x: 0,
            trans_y: 0,
            scale: 1,
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
        open_edit_pic: false,

        can_undo: false,
        can_redo: false,
    });

    const {
        vid_pic_obj,
        text_obj,
        tag_user_arr,

        open_add_text,
        open_add_friend,
        open_effect_pic,
        open_edit_pic,
    } = state_obj;

    const bg_pic = '';

    //
    const history_touch_arr = useRef([
        {
            trans_x: 0,
            trans_y: 0,
            scale: 1,
            rotate: 0,
        },
    ]);
    const active_touch_ix = useRef(0);

    //
    const forceUpdate = useForceUpdate();

    /* ------- PIC ------- */

    //
    function toggleEditPic() {
        setStateObj({
            ...state_obj,
            open_edit_pic: !open_edit_pic,
        });
    }

    /*------*/
    function undoRedoEditPic(undo_or_redo = true) {
        setStateObj((state_obj) => {
            active_touch_ix.current += undo_or_redo ? -1 : 1;

            return {
                ...state_obj,
                vid_pic_obj: {
                    ...state_obj.vid_pic_obj,
                    ...history_touch_arr.current[active_touch_ix.current],
                },
            };
        });
    }

    //
    function undoEditPic() {
        if (active_touch_ix.current == 0) {
            return;
        }

        undoRedoEditPic(true);
    }

    //
    function redoEditPic() {
        if (active_touch_ix.current == history_touch_arr.length - 1) {
            return;
        }

        undoRedoEditPic(false);
    }

    /*------*/
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

    /*------*/
    function changeModePic() {
        setStateObj((state_obj) => {
            const new_vid_pic_obj = { ...state_obj.vid_pic_obj };
            const new_mode_ix =
                (new_vid_pic_obj.mode_ix + 1) %
                data_story_pic_edit_mode_arr.length;

            new_vid_pic_obj.mode_ix = new_mode_ix;
            new_vid_pic_obj.mode = data_story_pic_edit_mode_arr[new_mode_ix];

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

            if (new_vid_pic_obj.scale <= 0.25 && client_change < 0) {
                new_vid_pic_obj.scale = 0.25;
            } else {
                new_vid_pic_obj.scale += client_change / (SCALE_PIC_RATIO * 4);
            }

            return {
                ...state_obj,
                vid_pic_obj: new_vid_pic_obj,
            };
        });
    }

    //
    function handleRotatePic() {
        setStateObj((state_obj) => {
            const new_vid_pic_obj = { ...state_obj.vid_pic_obj };
            const new_rotate = new_vid_pic_obj.rotate + 90;
            new_vid_pic_obj.rotate = new_rotate >= 360 ? 0 : new_rotate;

            return {
                ...state_obj,
                vid_pic_obj: new_vid_pic_obj,
            };
        });
    }

    //
    function handleTouchEndPic() {
        const { trans_x, trans_y, scale, rotate } = vid_pic_obj;
        const {
            trans_x: c_trans_x,
            trans_y: c_trans_y,
            scale: c_scale,
            rotate: c_rotate,
        } = history_touch_arr.current[active_touch_ix.current];

        if (
            trans_x == c_trans_x &&
            trans_y == c_trans_y &&
            scale == c_scale &&
            rotate == c_rotate
        ) {
            return;
        }

        active_touch_ix.current += 1;

        history_touch_arr.current.splice(
            active_touch_ix.current,
            history_touch_arr.current.length,
            {
                trans_x: trans_x,
                trans_y: trans_y,
                scale: scale,
                rotate: rotate,
            }
        );

        open_edit_pic && forceUpdate();

        // console.log(history_touch_arr.current);
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

            new_text_obj.scale = getValueHasMinMax(
                new_text_obj.scale + client_change / (SCALE_PIC_RATIO * 4),
                0.5,
                4
            );

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

            new_tag_user_arr[ix].scale = getValueHasMinMax(
                new_tag_user_arr[ix].scale +
                    client_change / (SCALE_PIC_RATIO * 4),
                0.5,
                2
            );

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
                handleTouchEnd={handleTouchEndPic}
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
                        <div className="padding-8px" onClick={closeAddText}>
                            <span className="font-500 text-white">Done</span>
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
                <div className="padding-4px">
                    <StoryCPActionsMb
                        mode={vid_pic_obj.mode}
                        openAddText={openAddText}
                        changeModePic={changeModePic}
                        openTagFriend={openTagFriend}
                    />
                </div>
            </div>

            <div
                className={`StoryCreatePicMb_edit_pic pos-abs left-0 ${
                    open_edit_pic ? 'w-100per' : ''
                }`}
            >
                <StoryCPEditPicMb
                    mode={vid_pic_obj.mode}
                    open_edit_pic={open_edit_pic}
                    can_undo={active_touch_ix.current > 0}
                    can_redo={
                        active_touch_ix.current <
                        history_touch_arr.current.length - 1
                    }
                    //
                    toggleEditPic={toggleEditPic}
                    openEffectPic={openEffectPic}
                    undoEditPic={undoEditPic}
                    redoEditPic={redoEditPic}
                    changeModePic={changeModePic}
                />
            </div>

            <div className="pos-abs left-0 top-0">
                <StoryIconCloseMb handleDiscard={handleDiscard} />
            </div>

            <div className="pos-abs left-0 bottom-0">
                <div className="padding-8px">
                    <StoryBtnPrivacyMb openPrivacy={openPrivacy} />
                </div>
            </div>

            <div className="pos-abs right-0 bottom-0">
                <div className="padding-8px">
                    <StoryBtnShareMb
                        can_share={true}
                        handleCreateStory={onCreateStory}
                    />
                </div>
            </div>

            <div
                className={`StoryCreatePicMb_rotate pos-abs left-0 w-100per bottom-0 ${
                    vid_pic_obj.mode.toUpperCase() == 'ROTATE'
                        ? 'StoryCreatePicMb_rotate-show'
                        : 'StoryCreatePicMb_rotate-hide'
                }`}
            >
                <div className="display-flex-center padding-8px bg-loader">
                    <StoryRotatePic handleRotate={handleRotatePic} />
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
                        <div className="padding-8px">
                            <span className="text-white font-500">Done</span>
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
                            <span className="text-white font-500">Done</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default StoryCreatePicMb;
