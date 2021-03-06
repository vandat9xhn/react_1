import React from "react";
import PropTypes from "prop-types";

import BtnActions from "../../../../../component/button/actions/BtnActions";

import IconLike from "../../../../../_icons_svg/icons_like/icon_like/IconLike";
import IconsPost from "../../../../../_icons_svg/icons_post/IconsPost";

import "./ShortVideoInteract.scss";

//
const IconObj = {
    like: <IconLike />,
    share: <IconsPost y={200} />,
    comment: <IconsPost x={200} />,
};

//
ShortVideoInteract.propTypes = {};

//
const ShortVideoInteractBtn = ({ icon_name, handleAction }) => {
    //
    const handleClick = () => {
        handleAction(icon_name);
    };

    //
    return (
        <BtnActions
            className="ShortVideoInteract_item_btn"
            Icon={IconObj[icon_name]}
            handleClick={handleClick}
        />
    );
};

//
function ShortVideoInteract({ interacts, handleAction }) {
    return (
        <div className="ShortVideoInteract display-flex flex-end flex-col padding-10px h-100per font-14px font-500">
            {interacts.map((item, ix) => (
                <div key={item.icon_name} className="padding-y-5px">
                    <div>
                        <ShortVideoInteractBtn
                            icon_name={item.icon_name}
                            handleAction={handleAction}
                        />
                    </div>

                    <div className="text-align-center">{item.count_str}</div>
                </div>
            ))}
        </div>
    );
}

export default ShortVideoInteract;
