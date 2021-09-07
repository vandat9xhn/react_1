import React from 'react';
import PropTypes from 'prop-types';
//
import SelectFAHeadItem from '../head_item/SelectFAHeadItem';
import SelectFABodyItem from '../body_item/SelectFABodyItem';
// 
import './SelectFullAddressList.scss';

//
SelectFullAddressList.propTypes = {};

//
function SelectFullAddressList({
    head_arr,
    body_arr,

    head_active_ix,
    body_active_ix,
    head_max_ix,

    chooseHeadItem,
    chooseBodyItem,
}) {
    //
    return (
        <div className="SelectFullAddressList bg-primary border-blur">
            <div className="SelectFullAddressList_head brs-5px">
                <div className="flex-between-center">
                    {head_arr.map((head_item, ix) => (
                        <div key={ix} className="SelectFullAddressList_head_item">
                            <SelectFAHeadItem
                                ix={ix}
                                head_item={head_item}
                                is_active={ix == head_active_ix}
                                is_banned={ix > head_max_ix && head_max_ix != -1}
                                chooseHeadItem={chooseHeadItem}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="SelectFullAddressList_body font-14px scroll-thin">
                {body_arr.map((body_item, ix) => (
                    <div key={ix}>
                        <SelectFABodyItem
                            ix={ix}
                            body_item={body_item}
                            is_active={ix == body_active_ix}
                            chooseBodyItem={chooseBodyItem}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectFullAddressList;
