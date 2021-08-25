import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import UnitTime from '../../../../../../_some_function/UnitTime';
//
import IconsMenu from '../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import IconDiv from '../../../../../../component/some_div/icon_div/IconDiv';
//
import FashionIsLike from '../../../../components/is_like/FashionIsLike';
//
import './FashionOL.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
FashionOL.propTypes = {};

//
function FashionOL({}) {
    //
    const { openRoomChat } = useContext(context_api);
    const { shop_info } = useContext(context_fashion_item);

    const { id, picture, name, time_online, count_like } = shop_info;

    //
    function handleChatNow() {
        openRoomChat(id);
    }

    //
    return (
        <div className="FashionOL pos-rel padding-16px">
            <div className="FashionOL_row display-flex align-items-center">
                <Link to={`/fashion/shop/${id}`}>
                    <div className="FashionOL_left pos-rel">
                        <img
                            className="brs-50 object-fit-cover"
                            src={picture}
                            alt=""
                            width="78"
                            height="78"
                        />

                        <div
                            className={`FashionOL_like pos-abs bottom-0 x-center width-fit-content ${
                                IS_MOBILE ? 'font-10px' : 'font-12px'
                            }`}
                        >
                            <FashionIsLike
                                is_like={count_like > 0}
                                is_plus={count_like > 100}
                            />
                        </div>
                    </div>
                </Link>

                <div className="FashionOL_right">
                    <div>{name}</div>

                    <div
                        className={`text-third ${
                            IS_MOBILE ? 'font-12px' : 'font-14px'
                        }`}
                    >
                        Online {UnitTime(time_online, '1 Phút', true)} Trước
                    </div>

                    <div className="display-flex padding-y-4px font-14px">
                        <div
                            className="FashionOL_chat padding-8px brs-2px bg-fashion-heart cursor-pointer color-fashion"
                            onClick={handleChatNow}
                        >
                            <IconDiv
                                Icon={IconsMenu}
                                x={200}
                                y={200}
                                size_icon="1rem"
                            >
                                Chat Ngay
                            </IconDiv>
                        </div>

                        <Link
                            to={`/fashion/shop/${id}`}
                            className={`text-third ${
                                IS_MOBILE ? 'pos-abs right-0 y-center' : ''
                            }`}
                        >
                            <div className="FashionOL_see margin-right-5px padding-8px brs-2px">
                                {IS_MOBILE ? (
                                    <div className="text-align-center">
                                        Xem Shop
                                    </div>
                                ) : (
                                    <IconDiv
                                        Icon={IconsMenu}
                                        x={400}
                                        size_icon="1rem"
                                    >
                                        Xem Shop
                                    </IconDiv>
                                )}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FashionOL;
