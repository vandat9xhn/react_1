import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import CircleLoading from '../../waiting/circle_loading/CircleLoading';
//
import ActionsMultiListItem from '../item/ActionsMultiListItem';
//
import './ActionsMultiListContain.scss';
import DivWidthLoading from '../../waiting/div_width_loading/DivWidthLoading';

//
ActionsMultiListContain.propTypes = {
    class_separate: PropTypes.string,
    ComponentItem: PropTypes.func,

    handle_API_L: PropTypes.func,
    handleAction: PropTypes.func,
};

ActionsMultiListContain.defaultProps = {
    class_separate: '',
    ComponentItem: ActionsMultiListItem,
};

//
function ActionsMultiListContain({
    list_action_arr,
    is_fetching,
    class_separate,

    ComponentItem,
    handleAction,
    handleClose,
}) {
    //
    return (
        <div class_separate="ActionsMultiListContain">
            {list_action_arr.map((action_arr, action_ix) => (
                <div key={action_ix} className="ActionsMultiListContain_part">
                    {action_ix == 0 ? null : (
                        <div
                            className={`ActionsMultiListContain_separate margin-y-8px bg-blur ${class_separate}`}
                        ></div>
                    )}

                    {action_arr.map((item, ix) => (
                        <ComponentItem
                            key={ix}
                            {...item}
                            handleAction={handleAction}
                            handleClose={handleClose}
                        />
                    ))}
                </div>
            ))}

            {is_fetching ? (
                IS_MOBILE ? (
                    <div className="pos-fixed top-0 left-0 w-100per z-index-1">
                        <DivWidthLoading is_fetching={is_fetching} />
                    </div>
                ) : (
                    <div className="display-flex-center padding-y-10px">
                        <CircleLoading is_fetching={true} />
                    </div>
                )
            ) : null}
        </div>
    );
}

export default ActionsMultiListContain;
