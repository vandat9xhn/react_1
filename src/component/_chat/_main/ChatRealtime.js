import React, { Component } from 'react';
// import update from 'immutability-helper';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { loadFile } from '../../../_some_function/loadFile';
//
import {
    handle_API_ChatLike_L,
    handle_API_ChatMessage_L,
    handle_API_ChatTimeLine_L,
    handle_API_ChatVidPic_L,
    handle_API_ChatZoom_R,
    handle_API_ProfileFriend_L,
} from '../__handle_api/ChatHandleAPI';

//
import { initial_chat_current } from '../__initial/ChatInitial';
//
import ChatWd from '../chat_window/_main/ChatWdRealtime';
//
import './Chat.scss';

//
class Chat extends Component {
    state = {
        current_chats: [initial_chat_current(), initial_chat_current()],
        canvas_index: -1,
        new_chat_ix: 1,
    };

    //
    componentDidMount() {
        setTimeout(() => {
            if (sessionStorage.initialMessageID) {
                for (const id of sessionStorage.initialMessageID
                    .split(',')
                    .reverse()) {
                    this.openChatAtBegin(id);
                }
            }
        }, 500);
    }

    /*----------------- OPEN --------------------*/

    //
    openChatAtBegin = async (id_or_zoom, is_id = true) => {
        const { user } = this.context;
        const zoom_chat = is_id
            ? [user.id, id_or_zoom].sort().join('-')
            : id_or_zoom;
        const { current_chats, new_chat_ix } = this.state;

        // if not already
        if (
            !current_chats.some((item) => item.zoom_obj.zoom_chat == zoom_chat)
        ) {
            //
            const new_ix = new_chat_ix == 0 ? 1 : 0;

            current_chats[new_ix] = initial_chat_current();

            this.setState({});

            // get data
            const {
                zoom_users,
                count_user,
                messages,
                count_message,
                user_begin_mess,
                is_group,
                owner,
                creator,
                count_group_notice,
            } = await handle_API_ChatZoom_R(zoom_chat);

            //
            current_chats[new_ix] = {
                chat_obj: {
                    is_active: true,
                    is_hide: false,
                    more_input: false,
                    show_preview: true,
                    user_input: false,
                    num_input: 0,
                    // on_input: false,
                },

                zoom_obj: {
                    zoom_chat: zoom_chat,
                    zoom_active: true,
                    zoom_users: zoom_users,
                    count_user: count_user,
                    zoom_owner: owner,
                    zoom_creator: creator,
                },

                group_obj: {
                    is_group: is_group,
                    show_action_group: false,
                },

                message_obj: {
                    messages: messages,
                    count_message: count_message,
                    user_begin_mess: user_begin_mess,
                },

                scroll_obj: {
                    just_scroll: false,
                    scroll_top: 0,
                    current_scroll: 0,
                    fetching_message: false,
                },

                canvas_obj: {
                    current_canvas: '',
                    list_canvas: [''],
                    c_step: 0,
                    bg: '#ffffff',
                    color: '#000000',
                    stroke_width: 1,
                },

                input_obj: {
                    urls: [],
                    files: [],
                    file_reading: false,
                },

                actions_obj: {
                    type: '',
                    like: {
                        mess_id: -1,
                        user_like: -1,
                        is_fetching: false,
                    },
                    edit: {
                        mess_id: -1,
                        is_fetching: false,
                    },
                    user_liked: {
                        mess_id: -1,
                        count: 0,
                        data_arr: [],
                        is_fetching: false,
                    },
                    add_user: {
                        count: 0,
                        data_arr: [],
                        is_fetching: false,
                    },
                    time_line: {
                        count: count_group_notice,
                        data_arr: [],
                        is_fetching: false,
                    },
                },
            };

            this.setState({
                new_chat_ix: new_ix,
            });
        } else {
            const current_chat = current_chats.find(
                (item) => item.zoom_obj.zoom_chat == zoom_chat
            );

            current_chat.chat_obj.is_hide = false;

            this.setState({});
            this.reverseCurrentMessage();
        }
    };

    //
    openMessage = (id, is_id) => {
        const { current_chats } = this.state;

        this.openChatAtBegin(id, is_id);

        setTimeout(() => {
            sessionStorage.initialMessageID = current_chats
                .map((item) => item.zoom_obj.zoom_chat)
                .join(',');
        }, 100);
    };

    /* ----------------------- GET MESSAGE ----------------------------- */

    //
    handleScroll = (event, chat_ix) => {
        const { scroll_obj } = this.state.current_chats[chat_ix];
        const { messages, count_message } =
            this.state.current_chats[chat_ix].message_obj;
        //
        if (messages.length >= count_message) {
            return;
        }
        if (event.target.scrollTop >= scroll_obj.scroll_top) {
            return;
        }
        if (scroll_obj.just_scroll) {
            return;
        }
        //
        const { scrollTop, clientHeight, scrollHeight } = event.target;

        if (scrollTop - clientHeight + scrollHeight <= 10) {
            scroll_obj.just_scroll = true;
            scroll_obj.scroll_top = scrollTop;
            this.getMoreMessage(event.target, chat_ix);
        }
    };

    //
    onGetMoreMessages = (chat_ix) => {
        const target = document.getElementsByClassName('ChatWd_body-contain')[
            chat_ix
        ];
        this.getMoreMessage(target, chat_ix);
    };

    //
    getMoreMessage = async (target, chat_ix) => {
        this.startGetMoreMessage(chat_ix);
        //
        const { zoom_chat } = this.state.current_chats[chat_ix].zoom_obj;
        const { messages } = this.state.current_chats[chat_ix].message_obj;

        const new_messages = await handle_API_ChatMessage_L(
            zoom_chat,
            messages.length
        );
        //
        this.endGetMoreMessage(chat_ix, target, new_messages);
    };

    //
    startGetMoreMessage = (chat_ix) => {
        const { scroll_obj } = this.state.current_chats[chat_ix];
        scroll_obj.fetching_message = true;
        this.setState({});
    };

    //
    endGetMoreMessage = (chat_ix, target, data) => {
        const current_scroll_top = target.scrollTop;
        const { scroll_obj } = this.state.current_chats[chat_ix];
        const { messages } = this.state.current_chats[chat_ix].message_obj;
        //
        messages.push(...data);
        scroll_obj.fetching_message = false;
        this.setState({});
        //
        scroll_obj.just_scroll = false;
        target.scrollTop = current_scroll_top;
    };

    //
    handleMouseLeave = (event, chat_ix) => {
        const { scroll_obj } = this.state.current_chats[chat_ix];
        scroll_obj.current_scroll = event.target.scrollTop;
    };

    /* ------------- HEAD -------------- */

    //
    reverseCurrentMessage = () => {
        const { current_chats, new_chat_ix } = this.state;
        if (
            current_chats[0].chat_obj.is_active +
                current_chats[1].chat_obj.is_active ==
                2 &&
            window.innerWidth <= 700
        ) {
            this.setState({
                new_chat_ix: new_chat_ix == 0 ? 1 : 0,
            });
        }
    };

    //
    closeMessage = (chat_ix) => {
        const { current_chats } = this.state;
        const zoom_chat = current_chats[chat_ix].zoom_obj;

        if (sessionStorage.initialMessageID) {
            sessionStorage.initialMessageID = sessionStorage.initialMessageID
                .replace(zoom_chat, '')
                .replace(',', '');
        }

        current_chats[chat_ix] = initial_chat_current();

        this.setState({
            new_chat_ix: chat_ix == 0 ? 1 : 0,
        });
    };

    //
    hideShowMessage = (chat_ix) => {
        const { chat_obj } = this.state.current_chats[chat_ix];
        chat_obj.is_hide = !chat_obj.is_hide;
        this.setState({});
    };

    /* -------------- BODY ----------------- */

    //
    openZoomVidPics = async (
        zoom_chat,
        mess_id,
        vid_pics,
        count_vid_pic,
        ix
    ) => {
        if (vid_pics.length >= count_vid_pic) {
            this.context.openZoomVidPics(vid_pics, ix);
        } else {
            const new_vid_pics = await handle_API_ChatVidPic_L(
                mess_id,
                vid_pics.length
            );

            vid_pics.push(...new_vid_pics);
            this.context.openZoomVidPics(vid_pics, ix);
        }
    };

    /* -------------- CANVAS --------------- */

    //
    letDrawCanvas = (chat_ix) => {
        const { canvas_obj } = this.state.current_chats[chat_ix];

        this.context.toggleCanvasFixed({
            type: 'open',
            completeCanvas: (canvas_data) =>
                this.completeCanvas(canvas_data, chat_ix),
            canvas_draws: {
                ...canvas_obj,
            },
        });
    };

    //
    completeCanvas = (canvas_data, chat_ix) => {
        const chat = this.state.current_chats[chat_ix];

        chat.canvas_obj = {
            ...canvas_data,
        };
        this.setState({});
    };

    //
    deleteCanvasDraw = (chat_ix) => {
        this.resetCanvas(chat_ix);
        this.setState({});
    };

    //
    resetCanvas = (chat_ix) => {
        const chat = this.state.current_chats[chat_ix];
        chat.canvas_obj = {
            current_canvas: '',
            list_canvas: [''],
            c_step: 0,
            bg: '#ffffff',
            color: '#000000',
            stroke_width: 1,
        };
    };

    /* -------------- PREVIEW --------------- */

    //
    deleteAnItemPreview = (chat_ix, file_ix) => {
        const { files, urls } = this.state.current_chats[chat_ix].input_obj;
        files.splice(file_ix, 1);
        urls.splice(file_ix, 1);
        this.setState({});
    };

    //
    showPreview = (chat_ix) => {
        const { chat_obj } = this.state.current_chats[chat_ix];
        chat_obj.show_preview = !chat_obj.show_preview;
        this.setState({});
    };

    /* ------------- FILE ---------------- */

    //
    handleChooseFiles = async (event, chat_ix) => {
        const new_files = event.target.files;

        if (new_files.length) {
            const { input_obj } = this.state.current_chats[chat_ix];
            const { urls, files } = input_obj;

            input_obj.file_reading = true;
            this.setState({});

            const { vid_pics } = await loadFile(new_files, 'url');

            files.push(...new_files);
            urls.push(...vid_pics);

            input_obj.file_reading = false;
            this.setState({});
        }
    };

    /* --------------- MORE INPUT --------------- */

    //
    moreActionsIp = (chat_ix) => {
        const { chat_obj } = this.state.current_chats[chat_ix];
        chat_obj.more_input = !chat_obj.more_input;
        this.setState({});
    };

    /* --------------- GROUP ---------------- */

    //
    handleToggleActionsGroup = (chat_ix) => {
        const { group_obj } = this.state.current_chats[chat_ix];
        group_obj.show_action_group = !group_obj.show_action_group;
        this.setState({});
    };

    /* ------------- ACTIONS OPEN ------------ */

    //
    openActionsMess = (action_type, data) => {
        if (action_type == 'edit') {
            this.openActionsEditMess(action_type, data);
        } else if (action_type == 'like') {
            this.openActionsLikeMess(action_type, data);
        } else if (action_type == 'user_liked') {
            this.openActionsUserLikedMess(action_type, data);
        } else if (action_type == 'zoom_user') {
            this.openActionsZoomUser(action_type, data);
        } else if (action_type == 'add_user') {
            this.openActionsAddFriendToGroup(action_type, data);
        } else if (action_type == 'time_line') {
            this.openActionsTimeLineGroup(action_type, data);
        }
    };

    //
    closeActionsMess = (chat_ix) => {
        const { actions_obj } = this.state.current_chats[chat_ix];
        actions_obj.type = '';
        this.setState({});
    };

    //
    openActionsEditMess = (action_type, data_action) => {
        const { mess_id, chat_ix } = data_action;

        const { actions_obj } = this.state.current_chats[chat_ix];
        actions_obj.type = action_type;
        actions_obj.edit = {
            mess_id: mess_id,
            is_fetching: false,
        };

        this.setState({});
    };

    //
    openActionsLikeMess = (action_type, data_action) => {
        const { mess_id, mess_ix, chat_ix } = data_action;
        const { actions_obj, message_obj } = this.state.current_chats[chat_ix];

        actions_obj.type = action_type;
        actions_obj.like = {
            mess_id: mess_id,
            user_like: message_obj.messages[mess_ix].user_like,
            is_fetching: false,
        };

        this.setState({});
    };

    //
    openActionsZoomUser = (action_type, data_action) => {
        const { chat_ix } = data_action;
        const { actions_obj } = this.state.current_chats[chat_ix];

        actions_obj.type = action_type;
        this.setState({});
    };

    //
    openActionsUserLikedMess = (action_type, data_action) => {
        const { chat_ix, mess_ix, mess_id } = data_action;
        const { actions_obj } = this.state.current_chats[chat_ix];
        const message =
            this.state.current_chats[chat_ix].message_obj.messages[mess_ix];
        const { user_liked } = actions_obj;

        user_liked.mess_id = mess_id;
        user_liked.data_arr = [];
        user_liked.count = message.count_like;
        actions_obj.type = action_type;

        const startOpenAction = () => [user_liked];
        const API_GetData = () => handle_API_ChatLike_L(mess_id);

        this.openAction(startOpenAction, API_GetData);
    };

    //
    openActionsAddFriendToGroup = (action_type, data_action) => {
        const { chat_ix } = data_action;
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { add_user } = actions_obj;
        const { zoom_users } = this.state.current_chats[chat_ix].zoom_obj;

        const exclude_ids = zoom_users.map((item) => item.profile_model);

        actions_obj.type = action_type;
        if (add_user.count == 0) {
            add_user.count = 10;
        }

        const startOpenAction = () => {
            add_user.exclude_ids = exclude_ids;
            return [add_user];
        };
        const API_GetData = () =>
            handle_API_ProfileFriend_L(exclude_ids, add_user.data_arr.length);

        this.openAction(startOpenAction, API_GetData);
    };

    //
    openActionsTimeLineGroup = (action_type, data_action) => {
        const { chat_ix } = data_action;
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { zoom_chat } = this.state.current_chats[chat_ix].zoom_obj;
        const { time_line } = actions_obj;

        actions_obj.type = action_type;
        const startOpenAction = () => [time_line];
        const API_GetData = () =>
            handle_API_ChatTimeLine_L(zoom_chat, time_line.data_arr.length);

        this.openAction(startOpenAction, API_GetData);
    };

    /* ------------ ACTIONS GET MORE ------------ */

    getMoreFriendsAddToGroup = (chat_ix) => {
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { add_user } = actions_obj;
        const { exclude_ids, data_arr } = add_user;
        //
        const API_GetData = () =>
            handle_API_ProfileFriend_L(exclude_ids, data_arr.length);
        this.getMoreData(add_user, API_GetData);
    };

    //
    getMoreUserLiked = (chat_ix) => {
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { user_liked } = actions_obj;
        const { mess_id, data_arr } = user_liked;

        const API_GetData = () =>
            handle_API_ChatLike_L(mess_id, data_arr.length);
        this.getMoreData(user_liked, API_GetData);
    };

    //
    getMoreTimeLineGroup = async (chat_ix) => {
        const { zoom_chat } = this.state.current_chats[chat_ix].zoom_obj;
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { time_line } = actions_obj;
        //
        const API_GetData = () =>
            handle_API_ChatTimeLine_L(zoom_chat, time_line.data_arr.length);
        this.getMoreData(time_line, API_GetData);
    };

    /* ----------- ACTIONS COMMON ------------ */

    //
    openAction = async (startOpenAction, API_GetData = () => new Promise()) => {
        const [action_obj] = startOpenAction();
        const { data_arr, count } = action_obj;
        console.log(data_arr, count);
        //
        action_obj.is_fetching = true;
        //
        if (data_arr.length < 5 && data_arr.length < count) {
            this.setState({});
            //
            const [data, new_count] = await API_GetData();
            console.log(data);

            action_obj.data_arr = [...data_arr, ...data];
            action_obj.count = new_count;
            action_obj.is_fetching = false;
            //
            this.setState({});
        } else {
            action_obj.is_fetching = false;
            this.setState({});
        }
    };

    //
    getMoreData = async (action_obj, API_GetData = () => new Promise()) => {
        const { data_arr } = action_obj;

        action_obj.is_fetching = true;
        this.setState({});

        const [data] = await API_GetData();
        data_arr.push(...data);
        action_obj.is_fetching = false;
        this.setState({});
    };

    /* ----------- SEND ------------ */

    //
    sendLikeMessage = (chat_ix) => {
        this.closeActionsMess(chat_ix);
    };

    //
    sendStatusMessage = (chat_ix) => {
        // this.closeActionsMess(chat_ix)
    };

    // send message
    sendMessage = async (chat_ix) => {
        const { input_obj } = this.state.current_chats[chat_ix];
        //
        input_obj.urls = [];
        input_obj.files = [];
        this.resetCanvas(chat_ix);
        this.setState({});
    };

    //
    sendDeleteMessage = (chat_ix) => {
        this.closeActionsMess(chat_ix);
    };

    //
    sendAddFriendToGroup = (chat_ix, friend_ix) => {
        const { add_user } = this.state.current_chats[chat_ix].actions_obj;
        const friend_added = add_user.data_arr.splice(friend_ix, 1);
        add_user.exclude_ids.push(friend_added.id);
        add_user.count -= 1;
        this.setState({});
    };

    //
    sendQuitGroup = (chat_ix) => {
        this.closeMessage(chat_ix);
        this.setState({});
    };

    //
    sendForceQuitGroup = (chat_ix) => {
        // this.closeActionsMess(chat_ix)
    };

    /* ---------- HANDLE ---------- */

    //
    handleDeleteMessage = ({ mess_id, chat_ix }) => {
        const { message_obj } = this.state.current_chats[chat_ix];
        const { messages } = message_obj;
        const mess_ix = messages.findIndex((item) => item.id == mess_id);

        messages.splice(mess_ix, 1);
        message_obj.count_message -= 1;
        this.setState({});
    };
    //
    handleGetMessage = ({
        new_mess_id,
        chat_ix,
        user_id,
        mess_text,
        vid_pics,
        count_vid_pic,
    }) => {
        const { message_obj, chat_obj } = this.state.current_chats[chat_ix];
        const { zoom_users, zoom_chat } =
            this.state.current_chats[chat_ix].zoom_obj;
        const { messages } = message_obj;

        const new_vid_pics = vid_pics.map((item) => ({
            vid_pic: item,
            mess_model: new_mess_id,
        }));
        messages.unshift({
            id: new_mess_id,
            zoom_model: zoom_chat,
            user: zoom_users.find((item) => item.profile_model == user_id).user,
            message: mess_text,
            vid_pics: new_vid_pics,
            count_vid_pic: count_vid_pic,
            // user_likes: [],
            count_user_like: 0,
            arr_distinct_user_like: [],
            user_statuses: [],
            profile_model: user_id,
            created_time: new Date().getTime(),
        });

        message_obj.count_message += 1;
        chat_obj.num_input -= 1;
        user_id == this.context.user.id && (chat_obj.user_input = false);

        this.setState({});
    };

    //
    handleOnInPut = ({ chat_ix, num_input }) => {
        const { chat_obj } = this.state.current_chats[chat_ix];
        chat_obj.num_input = num_input;
        this.setState({});
    };

    //
    handleStatusMessage = ({ user_id, mess_id, chat_ix, status_mess }) => {
        const { zoom_users } = this.state.current_chats[chat_ix].zoom_obj;
        const user = zoom_users.find((item) => item.profile_model == user_id);

        if (status_mess == 'seen') {
            user.i_seen_mess = mess_id;
        }
        if (status_mess == 'receive') {
            user.i_receive_mess = mess_id;
        }

        this.setState({});
    };

    //
    handleLikeMessage = ({
        chat_ix,
        mess_id,
        num_vol,
        arr_distinct_user_like,
    }) => {
        const { messages } = this.state.current_chats[chat_ix].message_obj;
        const message = messages.find((item) => item.id == mess_id);

        if (message) {
            message.count_user_like += num_vol;
            message.arr_distinct_user_like = arr_distinct_user_like;
            this.setState({});
        }
    };

    //
    handleAddFriendToGroup = ({
        chat_ix,
        user_id,
        friend,
        begin_mess,
    }) => {
        const { zoom_obj } = this.state.current_chats[chat_ix];
        const { zoom_users } = zoom_obj;
        const user = zoom_users.find((item) => item.user.id == user_id);

        zoom_users.push({
            user: friend,
            is_notice: true,
            on_chat: false,
            on_input: false,
            begin_mess: begin_mess,
            i_seen_mess: begin_mess,
            i_receive_mess: begin_mess,
            joined_time: new Date(),
        });
        zoom_obj.count_user += 1;
        this.onAddGroupNotices(chat_ix, user, friend, 'add_friend');

        this.setState({});
    };

    //
    handleQuitGroup = ({ chat_ix, user_id }) => {
        const user_out = this.onQuitGroup(chat_ix, user_id);
        this.onAddGroupNotices(chat_ix, user_out, {}, 'quit');

        this.setState({});
    };

    //
    handleForceQuitGroup = ({ chat_ix, friend_id }) => {
        if (friend_id == this.context.user.id) {
            this.closeMessage(chat_ix);
            this.setState;
        } else {
            const user_out = this.onQuitGroup(chat_ix, friend_id);
            this.onAddGroupNotices(
                chat_ix,
                this.state.current_chats[chat_ix].zoom_obj.zoom_owner,
                user_out,
                'force_quit'
            );

            this.setState({});
        }
    };

    //
    onQuitGroup = (chat_ix, user_id) => {
        const { zoom_obj } = this.state.current_chats[chat_ix];
        const { zoom_users } = zoom_obj;
        const zoom_user_ix = zoom_users.findIndex(
            (item) => item.user.id == user_id
        );

        const user_out = zoom_users.splice(zoom_user_ix, 1);
        zoom_obj.count_user -= 1;

        return user_out;
    };

    //
    onAddGroupNotices = (
        chat_ix,
        profile_model,
        profile_friend = {},
        status_notice
    ) => {
        const { actions_obj } = this.state.current_chats[chat_ix];
        const { time_line } = actions_obj;

        time_line.data_arr.length &&
            time_line.data_arr.unshift({
                profile_model: profile_model,
                profile_friend: profile_friend,
                status: status_notice,
                created_time: new Date(),
            });
        time_line.count += 1;
    };

    //
    render() {
        const { current_chats, new_chat_ix } = this.state;
        //
        const two_window =
            current_chats[0].chat_obj.is_active &&
            current_chats[1].chat_obj.is_active;

        //
        return (
            <div className={`Chat ${this.context.chat_class}`}>
                {current_chats.map(
                    (chat, chat_ix) =>
                        chat.chat_obj.is_active && (
                            <ChatWd
                                key={`Chat_message_${chat_ix}`}
                                c_user_id={this.context.user.id}
                                chat={chat}
                                chat_ix={chat_ix}
                                new_chat_ix={new_chat_ix}
                                two_window={two_window}
                                //
                                reverseCurrentMessage={
                                    this.reverseCurrentMessage
                                }
                                hideShowMessage={this.hideShowMessage}
                                closeMessage={this.closeMessage}
                                handleScroll={this.handleScroll}
                                getMoreMessages={this.onGetMoreMessages}
                                handleMouseLeave={this.handleMouseLeave}
                                //
                                openZoomVidPics={this.openZoomVidPics}
                                openActionsMess={this.openActionsMess}
                                closeActionsMess={this.closeActionsMess}
                                getMoreUserLiked={this.getMoreUserLiked}
                                getMoreTimeLineGroup={this.getMoreTimeLineGroup}
                                getMoreFriendsAddToGroup={this.getMoreFriendsAddToGroup}
                                //
                                handleToggleActionsGroup={
                                    this.handleToggleActionsGroup
                                }
                                //
                                letDrawCanvas={this.letDrawCanvas}
                                handleChooseFiles={this.handleChooseFiles}
                                moreActionsIp={this.moreActionsIp}
                                showPreview={this.showPreview}
                                deleteAnItemPreview={this.deleteAnItemPreview}
                                deleteCanvasDraw={this.deleteCanvasDraw}
                                // SEND
                                sendLikeMessage={this.sendLikeMessage}
                                sendStatusMessage={this.sendStatusMessage}
                                sendDeleteMessage={this.sendDeleteMessage}
                                sendMessage={this.sendMessage}
                                sendAddFriendToGroup={this.sendAddFriendToGroup}
                                sendQuitGroup={this.sendQuitGroup}
                                sendForceQuitGroup={this.sendForceQuitGroup}
                                // HANDLE
                                handleLikeMessage={this.handleLikeMessage}
                                handleOnInPut={this.handleOnInPut}
                                handleStatusMessage={this.handleStatusMessage}
                                handleGetMessage={this.handleGetMessage}
                                handleDeleteMessage={this.handleDeleteMessage}
                                handleAddFriendToGroup={
                                    this.handleAddFriendToGroup
                                }
                                handleQuitGroup={this.handleQuitGroup}
                                handleForceQuitGroup={this.handleForceQuitGroup}
                            />
                        )
                )}
            </div>
        );
    }
}

Chat.contextType = context_api;

Chat.propTypes = {};

export default Chat;
