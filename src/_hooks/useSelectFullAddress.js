import { useState } from 'react';
//
import { ADDRESS_HEAD_ARR } from '../_constant/Constant';
//
import { initial_province_arr } from '../_initial/input/full_address';
//
import { handle_API_FullAddress_L } from '../_handle_api/address/full_address';

//
export function useSelectFullAddress({
    address_str_arr = ['', '', ''],
    handleSelectFullAddress = () => {},
}) {
    //
    const [state_obj, setStateObj] = useState({
        address_arr: [] || initial_province_arr(),
        address_ix_arr: [-1, -1, -1],
        head_ix: 0,

        open_address: false,
        has_fetched: false,
        is_fetching: false,
        has_changed: false,
    });

    const {
        address_arr,
        address_ix_arr,
        head_ix,

        open_address,
        is_fetching,
        has_fetched,
    } = state_obj;

    // ----------

    async function getData_Address({
        new_head_ix = head_ix,
        new_address_ix_arr = address_ix_arr,
        new_address_str_arr = address_str_arr,
        start_state_obj = {},
    }) {
        const [province_ix, district_ix, commune_ix] = new_address_ix_arr;

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_fetching: true,
                open_address: true,
                head_ix: new_head_ix,
                address_ix_arr: new_address_ix_arr,
                // address_str_arr: new_address_str_arr,
                ...start_state_obj,
            };
        });

        const data = await handle_API_FullAddress_L({
            type: ADDRESS_HEAD_ARR[new_head_ix],
            name: new_address_str_arr[new_head_ix],
        });

        setStateObj((state_obj) => {
            let new_address_arr = [...state_obj.address_arr];

            if (new_head_ix == 0) {
                new_address_arr = data.map((province_text) => {
                    return {
                        name: province_text,
                        district: [],
                    };
                });
            } else if (new_head_ix == 1) {
                new_address_arr[province_ix].district = data.map(
                    (district_text) => {
                        return {
                            name: district_text,
                            commune: [],
                        };
                    }
                );
            } else {
                new_address_arr[province_ix].district[district_ix].commune =
                    data.map((district_text) => {
                        return {
                            name: district_text,
                        };
                    });
            }

            return {
                ...state_obj,
                address_arr: new_address_arr,
                has_fetched: true,
                is_fetching: false,
            };
        });
    }

    // ----------

    //
    function toggleOpenAddress() {
        if (!has_fetched && !open_address && !is_fetching) {
            getData_Address({
                new_head_ix: 0,
            });
        } else {
            setStateObj({
                ...state_obj,
                open_address: !open_address,
            });
        }
    }

    //
    function chooseHeadItem(new_head_ix) {
        if (head_ix == new_head_ix) {
            return;
        }

        setStateObj({
            ...state_obj,
            head_ix: new_head_ix,
        });
    }

    //
    function chooseBodyItem({ new_body_ix, new_body_str }) {
        const new_address_ix_arr = [
            ...address_ix_arr.slice(0, head_ix),
            new_body_ix,
            -1,
            -1,
        ].slice(0, 3);

        const new_address_str_arr = [
            ...address_str_arr.slice(0, head_ix),
            new_body_str,
            '',
            '',
        ].slice(0, 3);

        if (
            head_ix == 2 ||
            (head_ix == 0 &&
                new_address_ix_arr[0] >= 0 &&
                address_arr[new_address_ix_arr[0]].district.length) ||
            (head_ix == 1 &&
                new_address_ix_arr[1] >= 0 &&
                address_arr[new_address_ix_arr[0]].district[
                    new_address_ix_arr[1]
                ].commune.length)
        ) {
            setStateObj({
                ...state_obj,
                address_ix_arr: new_address_ix_arr,
                head_ix: head_ix == 2 ? 2 : head_ix + 1,
                has_changed: true,
            });
        } else {
            getData_Address({
                new_head_ix: head_ix + 1,
                new_address_ix_arr: new_address_ix_arr,
                new_address_str_arr: new_address_str_arr,
                start_state_obj: {
                    has_changed: true,
                },
            });
        }

        handleSelectFullAddress({
            new_address_str_arr,
        });
    }

    //
    function handleResetAddress() {
        setStateObj({
            ...state_obj,
            address_ix_arr: [-1, -1, -1],
            head_ix: 0,
        });

        handleSelectFullAddress({
            new_address_str_arr: ['', '', ''],
        });
    }

    //
    function getBodyArr() {
        if (head_ix == 0) {
            return address_arr.map((item) => item.name);
        }

        const province_obj = address_arr[address_ix_arr[0]];

        if (head_ix == 1) {
            return province_obj.district.map((item) => item.name);
        }

        const district_obj = province_obj.district[address_ix_arr[1]];

        return district_obj.commune.map((item) => item.name);
    }

    //
    return {
        state_obj,

        toggleOpenAddress,
        chooseBodyItem,
        chooseHeadItem,
        handleResetAddress,
        getBodyArr,
    };
}
