import React from 'react';
import PropTypes from 'prop-types';
//
import CmtActionItem from '../item/CmtActionItem';
import CircleLoading from '../../../../../../waiting/circle_loading/CircleLoading';

//
CmtActionContain.propTypes = {};

//
function CmtActionContain({
    action_arr,
    is_fetching,

    handleClose,
    handleAction,
}) {
    //
    return (
        <div className="CmtActionContain">
            <ul className="CmtActionContain_list list-none">
                {action_arr.map((item, ix) => (
                    <li key={ix}>
                        <CmtActionItem
                            name={item.name}
                            title={item.title}
                            handleClose={handleClose}
                            handleClick={handleAction}
                        />
                    </li>
                ))}
            </ul>

            {is_fetching ? (
                <div className="display-flex-center padding-y-15px">
                    <CircleLoading is_fetching={true} />
                </div>
            ) : null}
        </div>
    );
}

export default CmtActionContain;
