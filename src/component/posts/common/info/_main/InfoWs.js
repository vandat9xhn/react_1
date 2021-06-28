import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
import { context_post } from '../../../__context_post/ContextPost';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
//
import InfoCmt from '../cmt/InfoCmt';
import MouseEnterLeaveInfo from '../../mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import ListUniqueLike from '../../../../like/List_unique_like/_main/ListUniqueLike';
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

    likes,
    count_like,
    user_type_like,

    enabled_share,
    shares,
    count_share,
    count_unique_share,
    //
    handleClickBtnCmt,
}) {
    //
    const { openScreenShare, openScreenLike } = useContext(context_api);

    const { handle_API_Like_L, handle_API_Share_L } = useContext(context_post);

    /* ------------- OPEN SCREEN ------------ */

    //
    function onOpenDetailShare() {
        openScreenShare('Share', on_API_Share_L);
    }

    //
    function onOpenDetailLike(ix) {
        openScreenLike(on_API_Like_L, ix);
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
    const title_like =
        count_like > 1
            ? user_type_like >= 0
                ? `You and ${UnitNumber(count_like - 1)} others`
                : `${UnitNumber(count_like)}`
            : user_type_like >= 0
            ? `You`
            : `${UnitNumber(count_like)}`;

    const title_share =
        UnitNumber(count_share) + (count_share > 1 ? ' shares' : ' share');

    //
    const arr_unique_like = [0, 1, 3];

    //
    return (
        <div className="Info_contain">
            <div className="Info_row">
                <div className="Info_like">
                    <ListUniqueLike
                        title={title_like}
                        count_like={count_like}
                        arr_unique_like={arr_unique_like}
                        on_API_Like_L={on_API_Like_L}
                        onOpenDetailLike={onOpenDetailLike}
                    />
                </div>

                <div className="Info_cmt-share">
                    <div>
                        <InfoCmt
                            count_comment={count_comment}
                            handleClickBtnCmt={handleClickBtnCmt}
                        />
                    </div>

                    {enabled_share && (
                        <div
                            className={`Info_share ${
                                count_share ? '' : 'display-none'
                            }`}
                        >
                            <MouseEnterLeaveInfo
                                count={count_share}
                                title={title_share}
                                total_people={count_unique_share}
                                //
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
