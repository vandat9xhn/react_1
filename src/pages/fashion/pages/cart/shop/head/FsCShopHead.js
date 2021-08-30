import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import CheckBoxCustom from '../../../../../../component/input/checkbox_custom/CheckBoxCustom';
import FashionMallLike from '../../../../components/is_like/FashionMallLike';
//
import './FsCShopHead.scss';

//
FsCShopHead.propTypes = {};

//
function FsCShopHead({
    id,
    name,

    checked,
    is_mall,
    is_like,
    is_plus,

    handleChecked,
}) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function handleOpenChat() {
        openRoomChat(id);
    }

    //
    return (
        <div className="FsCShopHead padding-8px">
            <div className="FsCShopHead_row display-flex">
                <div>
                    <CheckBoxCustom
                        checked={checked}
                        title=""
                        handleChangeChecked={handleChecked}
                    />
                </div>

                <div className="padding-x-5px">
                    <div className="display-flex align-items-center">
                        <div className="margin-right-10px font-12px line-16px">
                            <FashionMallLike
                                is_like={is_like}
                                is_mall={is_mall}
                                is_plus={is_plus}
                                use_side={false}
                            />
                        </div>

                        <Link
                            to={`/fashion/shop/${id}`}
                            className="text-secondary"
                        >
                            {name}
                        </Link>
                    </div>
                </div>

                <div
                    className="FsCShopHead_mess display-flex-center cursor-pointer"
                    onClick={handleOpenChat}
                >
                    <IconsMenu x={200} y={200} size_icon="1rem" />
                </div>
            </div>
        </div>
    );
}

export default FsCShopHead;
