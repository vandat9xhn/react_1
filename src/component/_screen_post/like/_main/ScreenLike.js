import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { type_likes } from '../../../like/list_type_like/type_likes/TypeLikes';

import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenBlurShowMore from '../../../_screen_blur/_component/foot/ScreenBlurShowMore';
import UserAdd from '../../_component/user_add/UserAdd';
//
import ScreenLikeType from '../type_like/ScreenLikeType';
//
import './ScreenLike.scss';

//
class ScreenLike extends Component {
    state = {
        like_obj: {},
        type_like: -1,
        open_screen: false,
        is_fetching: false,
        handle_API_Like_L: () => new Promise(),
    };

    /* ----------------- COMMON ------------------- */

    handleBeforeGetAPI = (type_like) => {
        this.setState({
            is_fetching: true,
            type_like: type_like,
        });
    };

    handleAfterGetAPI = async (type_like) => {
        const { like_obj, handle_API_Like_L } = this.state;
        const { likes, count_like, has_fetched } = like_obj[type_like] || {
            likes: [],
            count_like: 0,
            has_fetched: false,
        };

        const [new_likes, new_count_like] = await handle_API_Like_L(
            likes.length
        );

        this.setState({
            is_fetching: false,
            like_obj: {
                ...like_obj,
                [type_like]: {
                    likes: [...likes, ...new_likes],
                    count_like: has_fetched ? count_like : new_count_like,
                    has_fetched: true,
                },
            },
        });
    };

    //
    getData_API_Like = (type_like) => {
        this.handleBeforeGetAPI(type_like);
        this.handleAfterGetAPI(type_like);
    };

    /* ----------------- OPEN + CLOSE ------------------- */

    //
    openScreenLike = (handle_API_Like_L, type_like = -1) => {
        this.setState({
            open_screen: true,
            is_fetching: true,
            handle_API_Like_L: handle_API_Like_L,
            type_like: type_like,
        });

        setTimeout(() => {
            this.handleAfterGetAPI(type_like);
        }, 1);
    };

    //
    closeScreenLike = () => {
        this.setState({
            open_screen: false,
            like_obj: {},
            type_like: -1,
            handle_API_Like_L: () => new Promise(),
        });
    };

    /* ------------------------------------ */

    //
    changeListTypeLike = (new_type_like) => {
        const { like_obj, type_like } = this.state;
        //
        if (type_like == new_type_like) {
            return;
        }
        //
        if (like_obj[new_type_like]) {
            this.setState({
                type_like: new_type_like,
            });
        } else {
            this.getData_API_Like(new_type_like);
        }
    };

    //
    changeListTypeLikeAll = () => {
        this.changeListTypeLike(-1);
    };

    //
    showMoreLike = () => {
        this.getData_API_Like(this.state.type_like);
    };

    //
    handleSendAddFriend = (friend_id) => {
        console.log(friend_id);
    };

    //
    render() {
        const { like_obj, type_like, open_screen, is_fetching } = this.state;
        //
        const { likes, count_like, has_fetched } = like_obj[type_like] || {
            likes: [],
            count_like: 0,
            has_fetched: false,
        };

        //
        return (
            <ScreenBlur
                open_screen={open_screen}
                closeScreen={this.closeScreenLike}
            >
                <div className="ScreenLike">
                    <div className="ScreenLike_head-contain">
                        <div className="ScreenLike_head-row">
                            <div
                                onClick={this.changeListTypeLikeAll}
                                className={type_like == -1 ? 'bottom-blue' : ''}
                            >
                                All
                            </div>

                            {type_likes.map((item, ix) => (
                                <div
                                    key={`ScreenLike_type_like_${ix}`}
                                    className={
                                        type_like == ix ? 'bottom-blue' : ''
                                    }
                                >
                                    <ScreenLikeType
                                        ix={ix}
                                        changeListTypeLike={
                                            this.changeListTypeLike
                                        }
                                        component={item.component}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="ScreenLike_icon-close">
                            <div
                                className="ScreenLike_icon-close_contain close-icon-small brs-50"
                                onClick={this.closeScreenLike}
                            >
                                <IconsArrow y={400} size_icon="1rem" />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`ScreenBlur_body ${
                            has_fetched ? '' : 'display-none'
                        }`}
                    >
                        <div className="ScreenBlur_body_contain scroll-thin">
                            {likes.map((item, ix) => (
                                <div
                                    key={`ScreenLike_add_friend_${ix}`}
                                    className="ScreenLike_add-friend"
                                >
                                    <UserAdd
                                        user={item.user}
                                        handleSendAddFriend={
                                            this.handleSendAddFriend
                                        }
                                        content={
                                            type_likes[item.type_like].component
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <ScreenBlurShowMore
                        is_show_more={count_like > likes.length}
                        is_fetching={is_fetching}
                        handleShowMore={this.showMoreLike}
                    />
                </div>
            </ScreenBlur>
        );
    }
}

ScreenLike.propTypes = {};

export default ScreenLike;
