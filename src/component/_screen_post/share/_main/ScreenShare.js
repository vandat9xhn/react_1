import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlur from '../../../_screen_blur/_main/ScreenBlur';
import ScreenBlurHead from '../../../_screen_blur/_component/head/ScreenBlurHead';
import ScreenBlurShowMore from '../../../_screen_blur/_component/foot/ScreenBlurShowMore';
import UserAdd from '../../_component/user_add/UserAdd';
//
import './ScreenShare.scss';

//
class ScreenShare extends Component {
    state = {
        open_screen: false,
        is_fetching: false,
        has_fetched: false,

        shares: [],
        count_share: 0,
        //
        title: '',
        handle_API_Share_L: () => new Promise(),
    };

    //
    handleBeforeGetAPI = () => {
        this.setState({
            is_fetching: true,
        });
    };

    //
    handleAfterGetAPI = async () => {
        const { shares, count_share, has_fetched, handle_API_Share_L } =
            this.state;

        const [new_shares, new_count_share] = await handle_API_Share_L();
        //
        this.setState({
            is_fetching: false,
            has_fetched: true,

            shares: [...shares, ...new_shares],
            count_share: has_fetched ? count_share : new_count_share,
        });
    };

    //
    openScreenShare = (title, handle_API_Share_L) => {
        this.setState({
            open_screen: true,
            is_fetching: true,

            title: title,
            handle_API_Share_L: handle_API_Share_L,
        });

        setTimeout(() => {
            this.handleAfterGetAPI();
        }, 1);
    };

    //
    showMoreShare = () => {
        this.handleBeforeGetAPI();
        this.handleAfterGetAPI();
    };

    //
    closeScreenShare = () => {
        this.setState({
            open_screen: false,
            shares: [],
            count_share: 0,
            //
            parent_id: 0,
            title: '',
            handle_API_Share_L: () => new Promise(),
        });
    };

    //
    handleSendAddFriend = (friend_id) => {
        console.log(friend_id);
    };

    //
    render() {
        //
        const {
            open_screen,
            is_fetching,
            has_fetched,

            shares,
            count_share,
            title,
        } = this.state;

        //
        return (
            open_screen &&
            <ScreenBlur
                // open_screen={open_screen}
                closeScreen={this.closeScreenShare}
            >
                <div className="ScreenShare_contain">
                    <ScreenBlurHead
                        title={title}
                        closeScreenBlur={this.closeScreenShare}
                    />

                    <div
                        className={`ScreenBlur_body ${
                            has_fetched ? '' : 'display-none'
                        }`}
                    >
                        <div className="ScreenBlur_body_contain scroll-thin">
                            {shares.map((share, ix) => (
                                <UserAdd
                                    key={`ScreenLike_${ix}`}
                                    user={share.user}
                                    handleSendAddFriend={
                                        this.handleSendAddFriend
                                    }
                                />
                            ))}
                        </div>
                    </div>

                    <ScreenBlurShowMore
                        is_show_more={
                            count_share > shares.length && !is_fetching
                        }
                        is_fetching={is_fetching}
                        handleShowMore={this.showMoreShare}
                    />
                </div>
            </ScreenBlur>
        );
    }
}

ScreenShare.propTypes = {};

export default ScreenShare;
