import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconPlusSubtract from '../../../../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
import IconsMenu from '../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FashionMallLike from '../../../../components/is_like/FashionMallLike';
//
import './FsSOverviewLeading.scss';

//
FsSOverviewLeading.propTypes = {
    profile_model: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    banner: PropTypes.string,
};

//
function FsSOverviewLeading({ shop_info }) {
    //
    const {
        id,
        picture,
        name,
        banner,
        is_like,
        is_mall,
        is_plus,
        time_offline_latest,
    } = shop_info;

    //
    const { openRoomChat } = useContext(context_api);

    //
    function onOpenMessage() {
        openRoomChat(id);
    }

    //
    return (
        <div className="FsSOverviewLeading pos-rel h-100per brs-3px overflow-hidden text-white">
            <div
                className="FsSOverviewLeading_bg pos-abs-100"
                style={{ backgroundImage: `url(${banner})` }}
            ></div>

            <div className="FsSOverviewLeading_contain h-100per pos-rel padding-x-15px padding-y-10px bg-film">
                <div className="FsSOverviewLeading_row">
                    <div className="FsSOverviewLeading_info margin-bottom-12px">
                        <div className="FsSOverviewLeading_info_row display-flex align-items-center">
                            <div className="pos-rel margin-right-10px">
                                <img
                                    className="FsSOverviewLeading_picture brs-50 object-fit-cover"
                                    src={picture}
                                    alt=""
                                    width="70"
                                    height="70"
                                />

                                <div className="FsSOverviewLeading_like pos-abs left-0 w-100per">
                                    <FashionMallLike
                                        is_like={is_like}
                                        is_mall={is_mall}
                                        is_plus={is_plus}
                                        class_text="padding-y-2px font-12px line-12px text-align-center"
                                        use_side={false}
                                    />
                                </div>
                            </div>

                            <div className="FsSOverviewLeading_info-right">
                                <h1 className="margin-bottom-5px font-20px line-24px">
                                    {name}
                                </h1>

                                <div className="font-12px line-14px">
                                    <span>Online</span>

                                    <span>
                                        {time_offline_latest
                                            ? time_offline_latest + ' trước'
                                            : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="FsSOverviewLeading_actions flex-between-center text-upper">
                        <div className="FsSOverviewLeading_follow FsSOverviewLeading_actions_item display-flex-center font-12px line-12px cursor-pointer">
                            <IconPlusSubtract
                                size_icon="1rem"
                                stroke="currentColor"
                            />

                            <span className="margin-left-5px">Theo dõi</span>
                        </div>

                        <div
                            className="FsSOverviewLeading_chat FsSOverviewLeading_actions_item display-flex-center font-12px line-12px cursor-pointer"
                            onClick={onOpenMessage}
                        >
                            <IconsMenu x={200} y={200} size_icon="1rem" />

                            <span className="margin-left-5px">Chat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsSOverviewLeading;
