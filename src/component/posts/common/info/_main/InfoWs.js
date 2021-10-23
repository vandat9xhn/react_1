import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
//
import { openScreenLike } from '../../../../_screen/type/like/_main/ScreenLike';
import { openScreenUserAdd } from '../../../../_screen/type/user_add/_main/ScreenUserAdd';
//
import MouseEnterLeaveInfo from '../../mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import ListUniqueLike from '../../../../like/List_unique_like/_main/ListUniqueLike';
//
import InfoCmt from '../cmt/InfoCmt';
import PeopleShare from '../share/PeopleShare';
//
import './Info.scss';

//
Info.propTypes = {
    enabled_share: PropTypes.bool,
};

Info.defaultProps = {
    enabled_share: true,
};

//
function Info({
    parent_id,
    count_comment,

    reacted_count,
    reacted_ix_arr,
    user_reacted_ix,

    enabled_share,
    count_share,
    count_unique_share,
    //
    handleClickBtnCmt,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    const { handle_API_Like_L, handle_API_Share_L } = useContext(context_post);

    //-----

    const title_reacted =
        reacted_count > 1
            ? user_reacted_ix >= 0
                ? `You and ${UnitNumber(reacted_count - 1)} others`
                : `${UnitNumber(reacted_count)}`
            : user_reacted_ix >= 0
            ? `You`
            : `${UnitNumber(reacted_count)}`;

    const title_share = `${UnitNumber(count_share)} share${
        count_share > 1 ? 's' : ' '
    }`;

    // --------

    //
    function onOpenDetailShare() {
        openScreenUserAdd({
            openScreenFloor: openScreenFloor,
            title: 'People who shared this',
            handle_API_UserAdd_L: on_API_Share_L,
        });
    }

    //
    function onOpenDetailLike(type_like) {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: on_API_Like_L,
            type_like: type_like,
        });
    }

    //
    function on_API_Share_L() {
        return handle_API_Share_L(parent_id, 0);
    }

    //
    function on_API_Like_L(type_like) {
        return handle_API_Like_L(parent_id, 0, type_like);
    }

    //
    return (
        <div className="Info padding-y-5px text-secondary">
            <div className="Info_row flex-between-center">
                <div className="Info_like pos-rel">
                    <ListUniqueLike
                        title={title_reacted}
                        count_like={reacted_count}
                        arr_unique_like={reacted_ix_arr}
                        div_fix_width={175}
                        //
                        on_API_Like_L={on_API_Like_L}
                        onOpenDetailLike={onOpenDetailLike}
                    />
                </div>

                <div className="Info_cmt-share display-flex padding-4px">
                    <div>
                        <InfoCmt
                            count_comment={count_comment}
                            handleClickBtnCmt={handleClickBtnCmt}
                        />
                    </div>

                    {enabled_share && (
                        <div
                            className={`Info_share pos-rel ${
                                count_share ? '' : 'display-none'
                            }`}
                        >
                            <MouseEnterLeaveInfo
                                count={count_share}
                                title={title_share}
                                total_people={count_unique_share}
                                div_fix_width={150}
                                //
                                PeopleComponent={PeopleShare}
                                handle_API_L={on_API_Share_L}
                                handleOpenScreen={onOpenDetailShare}
                                LoadingComponent={CircleLoading}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Info;
