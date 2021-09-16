import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { handle_API_FsUserInfoBuy_L } from '../../../../../../../_handle_api/fashion/user_info';
//
import { openScreenWithElm } from '../../../../../../../component/_screen/type/with_elm/ScreenWithElm';
import { openScreenConfirm } from '../../../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import { initial_user_info_buy_obj } from '../../../../../../../_initial/fashion/user_info';
//
import FsAddAddressScreen from '../../../../../components/add_address/_screen/FsAddAddressScreen';
import FsPAddressHead from '../head/FsPAddressHead';
import FsPAddressItem from '../item/FsPAddressItem';
//
import './FsPersonalAddress.scss';

//
FsPersonalAddress.propTypes = {};

//
function FsPersonalAddress(props) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        address_arr: [] || [initial_user_info_buy_obj()],
        has_fetched: false,
    });

    const { address_arr, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_Address();
    }, []);

    // ----- API

    //
    async function getData_Address() {
        const { data } = await handle_API_FsUserInfoBuy_L({ c_count: 0 });
        data[0].is_default = true;

        setStateObj({
            ...state_obj,
            address_arr: data,
            has_fetched: true,
        });
    }

    // -----

    //
    function handleAddFix(data, address_ix) {
        const new_address_obj = {
            id: address_ix >= 0 ? address_arr[address_ix].id : -1,
            name: data.user_name,
            phone: data.phone,
            address: [data.specific, data.address_str_arr].join(', '),
            type: data.type,
            is_default: data.checked_default,
        };

        const new_address_arr = [...address_arr];

        if (data.checked_default) {
            new_address_arr.find((item) => item.is_default).is_default = false;
        }

        if (address_ix >= 0) {
            new_address_arr[address_ix] = new_address_obj;
        } else {
            new_address_arr.push(new_address_obj);
        }

        setStateObj({
            ...state_obj,
            address_arr: new_address_arr,
        });

        closeScreenFloor();
    }

    // -----

    //
    function openAddNewAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <FsAddAddressScreen
                    title="Địa chỉ mới"
                    handleBack={closeScreenFloor}
                    handleComplete={(data) => handleAddFix(data, -1)}
                />
            ),
        });
    }

    //
    function setDefault(address_ix) {
        const new_address_arr = [...address_arr];

        new_address_arr.find((item) => item.is_default).is_default = false;
        new_address_arr[address_ix].is_default = true;

        setStateObj({
            ...state_obj,
            address_arr: new_address_arr,
        });
    }

    //
    function openFix(address_ix) {
        const address_obj = address_arr[address_ix];
        const first_comma_ix = address_obj.address.indexOf(',');

        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <FsAddAddressScreen
                    title="Chỉnh sửa địa chỉ"
                    old_user_name={address_obj.name}
                    old_phone={address_obj.phone}
                    old_specific={address_obj.address.slice(0, first_comma_ix)}
                    old_type={address_obj.type}
                    old_current_address={address_obj.address.slice(
                        first_comma_ix + 2
                    )}
                    is_default={address_obj.is_default}
                    handleBack={closeScreenFloor}
                    handleComplete={(data) => handleAddFix(data, address_ix)}
                />
            ),
        });
    }

    //
    function openDelete(address_ix) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Xóa địa chỉ',
            notification: 'Bạn muốn xóa địa chỉ này không?',
            handleConfirm: () => {
                handleDelete(address_ix);
            },
        });
    }

    //
    function handleDelete(address_ix) {
        const new_address_arr = [...address_arr];
        new_address_arr.splice(address_ix, 1);

        setStateObj({
            ...state_obj,
            address_arr: new_address_arr,
        });
    }

    //
    return (
        <div className="FsPersonalAddress bg-primary">
            <div>
                <FsPAddressHead openAddNewAddress={openAddNewAddress} />
            </div>

            <div>
                {address_arr.map((item, ix) => (
                    <div key={item.id}>
                        <FsPAddressItem
                            ix={ix}
                            is_last={ix == address_arr.length - 1}
                            name={item.name}
                            phone={item.phone}
                            address={item.address}
                            is_default={item.is_default}
                            //
                            setDefault={setDefault}
                            handleFix={openFix}
                            handleDelete={openDelete}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPersonalAddress;
