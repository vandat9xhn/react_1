import React from 'react';
import PropTypes from 'prop-types';
//
import { ADDRESS_HEAD_ARR } from '../../../../_constant/Constant';
//
import SelectFullAddressList from '../list/_main/SelectFullAddressList';
import SelectFullAddressCurrent from '../current/SelectFullAddressCurrent';

//
SelectFullAddress.propTypes = {};

//
function SelectFullAddress({
    address_ix_arr,
    head_ix,
    is_error,

    province,
    district,
    commune,

    open_address,
    is_fetching,
    has_fetched,
    has_changed,

    toggleOpenAddress,
    chooseBodyItem,
    chooseHeadItem,
    handleResetAddress,
    getBodyArr,
}) {
    //
    return (
        <div className="SelectFullAddress pos-rel">
            <div>
                <SelectFullAddressCurrent
                    is_error={is_error && has_changed}
                    province={province}
                    district={district}
                    commune={commune}
                    open_address={open_address}
                    toggleOpenAddress={toggleOpenAddress}
                    handleResetAddress={handleResetAddress}
                />
            </div>

            {is_error && !open_address && has_changed ? (
                <div className="margin-top-5px text-red font-12px">
                    Địa chỉ không phù hợp
                </div>
            ) : null}

            {open_address ? (
                <div className="pos-abs top-100per left-0 w-100per z-index-lv1">
                    <SelectFullAddressList
                        head_arr={ADDRESS_HEAD_ARR}
                        body_arr={
                            is_fetching || !has_fetched ? [] : getBodyArr()
                        }
                        head_active_ix={head_ix}
                        body_active_ix={address_ix_arr[head_ix]}
                        head_max_ix={address_ix_arr.indexOf(-1)}
                        //
                        chooseHeadItem={chooseHeadItem}
                        chooseBodyItem={chooseBodyItem}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default SelectFullAddress;
