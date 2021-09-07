import React from 'react';
import PropTypes from 'prop-types';
//
import { useSelectFullAddress } from '../../../../../../_hooks/useSelectFullAddress';
// 
import SelectFullAddress from '../../../../../../component/input/select_full_address/_main/SelectFullAddress';

//
FsAddAddressFull.propTypes = {};

//
function FsAddAddressFull({ address_str_arr, handleSelectFullAddress }) {
    //
    const {
        state_obj,

        toggleOpenAddress,
        chooseBodyItem,
        chooseHeadItem,
        handleResetAddress,
        getBodyArr,
    } = useSelectFullAddress({
        address_str_arr: address_str_arr,
        handleSelectFullAddress: handleSelectFullAddress,
    });

    const {
        address_ix_arr,
        head_ix,

        open_address,
        is_fetching,
        has_fetched,
        has_changed,
    } = state_obj;

    const is_error = address_ix_arr.includes(-1) && has_changed;

    //
    return (
        <SelectFullAddress
            address_ix_arr={address_ix_arr}
            head_ix={head_ix}
            is_error={is_error}
            // 
            province={address_str_arr[0]}
            district={address_str_arr[1]}
            commune={address_str_arr[2]}
            //
            open_address={open_address}
            is_fetching={is_fetching}
            has_fetched={has_fetched}
            has_changed={has_changed}
            //
            toggleOpenAddress={toggleOpenAddress}
            chooseBodyItem={chooseBodyItem}
            chooseHeadItem={chooseHeadItem}
            handleResetAddress={handleResetAddress}
            getBodyArr={getBodyArr}
        />
    );
}

export default FsAddAddressFull;
