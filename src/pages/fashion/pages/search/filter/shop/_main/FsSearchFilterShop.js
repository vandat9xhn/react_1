import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FashionMallLike from '../../../../../components/is_like/FashionMallLike';
//
import './FsSearchFilterShop.scss';

//
FsSearchFilterShop.propTypes = {};

//
function FsSearchFilterShop({ shop_info }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    const {
        id,
        name,
        picture,
        banner,

        is_like,
        is_mall,
        is_plus,
    } = shop_info;

    //
    function openChat() {
        openRoomChat(id);
    }

    //
    return (
        <div
            className="FsSearchFilterShop brs-8px overflow-hidden"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="padding-10px bg-shadow-5">
                <Link className="text-white" to={`/fashion/shop/${id}`}>
                    <div className="display-flex-center">
                        <div className="pos-rel">
                            <img
                                className="FsSearchFilterShop_pic_img brs-50 object-fit-cover"
                                src={picture}
                                alt=""
                                width="72"
                                height="72"
                            />

                            <div className="pos-abs left-0 bottom-0 w-100per">
                                <FashionMallLike
                                    is_like={is_like}
                                    is_mall={is_mall}
                                    is_plus={is_plus}
                                    class_text="font-11px line-14 text-align-center"
                                    use_side={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="margin-top-10px text-align-center text-cap font-16px font-500">
                        {name}
                    </div>
                </Link>

                <div className="margin-top-15px">
                    <button
                        className="FsSearchFilterShop_chat w-100per padding-y-5px inline-flex align-items-center justify-content-center cursor-pointer text-white bg-transparent"
                        type="button"
                        onClick={openChat}
                    >
                        <IconsMenu x={200} y={200} size_icon="1rem" />

                        <span className="margin-left-5px">Chat ngay</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FsSearchFilterShop;
