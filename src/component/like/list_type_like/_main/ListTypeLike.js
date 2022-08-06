import React, { useRef } from "react";
import PropTypes from "prop-types";
//
import { IS_MOBILE } from "../../../../_constant/Constant";
import { type_likes } from "../type_likes/TypeLikes";
//
import FlexCenterWrap from "../../../flex_center_wrap/FlexCenterWrap";

import TypeLikeItem from "../item/TypeLikeItem";
//
import "./ListTypeLike.scss";

//
ListTypeLike.propTypes = {
    open_type_like: PropTypes.bool,
    chooseListTypeLike: PropTypes.func,
};

//
function ListTypeLikeRow({ chooseListTypeLike }) {
    return (
        <div className="ListTypeLike_row display-flex padding-5px bg-primary">
            {type_likes.map((item, index) => (
                <div
                    key={index}
                    className="ListTypeLike_item FlexCenterWrap_item margin-x-5px flex-shrink-0"
                >
                    <TypeLikeItem
                        index={index}
                        title={item.title}
                        component={item.component}
                        chooseListTypeLike={chooseListTypeLike}
                    />
                </div>
            ))}
        </div>
    );
}

//
function ListTypeLike({ chooseListTypeLike, open_type_like }) {
    //
    const ref_parent = useRef(null);

    //
    return (
        <div className="ListTypeLike pos-rel user-select-none">
            <div className={open_type_like ? "open-type-like" : "display-none"}>
                <div ref={ref_parent} className="ListTypeLike_contain">
                    {IS_MOBILE ? (
                        <FlexCenterWrap
                            ref_parent={ref_parent}
                            // more_item_width={16}
                            more_parent_width={-16}
                        >
                            <ListTypeLikeRow
                                chooseListTypeLike={chooseListTypeLike}
                            />
                        </FlexCenterWrap>
                    ) : (
                        <ListTypeLikeRow
                            chooseListTypeLike={chooseListTypeLike}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListTypeLike;
