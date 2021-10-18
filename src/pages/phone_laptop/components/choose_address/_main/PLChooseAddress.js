import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FullAddress_L } from '../../../../../_handle_api/address/full_address';
//
import PLChooseAddressInput from '../input/_main/PLChooseAddressInput';
import PLChooseAddressHead from '../head/PLChooseAddressHead';
//
import './PLChooseAddress.scss';

//
PLChooseAddress.propTypes = {
    province: PropTypes.string,
    district: PropTypes.string,
    commune: PropTypes.string,
    num_home: PropTypes.string,

    handleChangeAddress: PropTypes.func,
    closeScreen: PropTypes.func,
};

PLChooseAddress.defaultProps = {
    province: '',
    district: '',
    commune: '',
    num_home: '',
};

//
function PLChooseAddress({
    province,
    district,
    commune,
    num_home,

    handleChangeAddress,
    closeScreen,
}) {
    //
    const [state_obj, setStateObj] = useState({
        province_arr: [] || [{ id: -1, name: '' }],
        province_ix: -1,
        province_has_fetched: false,

        district_arr: [] || [{ id: -1, name: '' }],
        district_ix: -1,
        district_has_fetched: false,

        commune_arr: [] || [{ id: -1, name: '' }],
        commune_ix: -1,
        commune_has_fetched: false,
    });

    const {
        province_arr,
        district_arr,
        commune_arr,

        province_ix,
        district_ix,
        commune_ix,

        province_has_fetched,
        district_has_fetched,
        commune_has_fetched,
    } = state_obj;

    //
    const ref_num_home = useRef(null);

    //
    useEffect(() => {
        getData_InitialAddress();
    }, []);

    // ------ API

    //
    async function getData_InitialAddress() {
        province &&
            setStateObj((state_obj) => {
                return {
                    ...state_obj,
                    province_arr: province ? [{ id: 0, name: province }] : [],
                    district_arr: district ? [{ id: 0, name: district }] : [],
                    commune_arr: commune ? [{ id: 0, name: commune }] : [],

                    province_ix: 0,
                    district_ix: district ? 0 : -1,
                    commune_ix: commune ? 0 : -1,
                };
            });
    }

    //
    async function getData_Address({
        type_address = '',
        name_address = '',
        key_state = '',
        default_value = '',
    }) {
        const data = await handle_API_FullAddress_L({
            type: type_address,
            name: name_address,
        });

        const ix = data.findIndex((item) => item.name == default_value);

        if (ix == -1 && default_value) {
            data.unshift(default_value);
        }

        const data_arr = data.map((item, ix) => {
            return {
                id: ix + 100,
                name: item,
            };
        });

        setStateObj((state_obj) => {
            return {
                ...state_obj,
                [`${key_state}_arr`]: data_arr,
                [`${key_state}_ix`]: ix == -1 && default_value ? 0 : ix,
                [`${key_state}_has_fetched`]: true,
            };
        });
    }

    // --------- GET Data

    //
    function getData_Province() {
        getData_Address({
            type_address: 'province',
            key_state: 'province',
            default_value: province,
        });
    }

    //
    function getData_District() {
        province_ix >= 0 &&
            getData_Address({
                type_address: 'district',
                name_address: province_arr[province_ix].name,
                key_state: 'district',
                default_value: district,
            });
    }

    //
    function getData_Commune() {
        district_ix >= 0 &&
            getData_Address({
                type_address: 'commune',
                name_address: district_arr[district_ix].name,
                key_state: 'commune',
                default_value: commune,
            });
    }

    // ------ CHOOSE

    //
    function chooseProvince(province_id = 0) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                province_ix: province_arr.findIndex(
                    (item) => item.id == province_id
                ),
                district_arr: [],
                district_ix: -1,
                district_has_fetched: false,
                
                commune_arr: [],
                commune_ix: -1,
                commune_has_fetched: false,
            };
        });
    }

    //
    function chooseDistrict(district_id = 0) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                district_ix: district_arr.findIndex(
                    (item) => item.id == district_id
                ),

                commune_arr: [],
                commune_ix: -1,
                commune_has_fetched: false,
            };
        });
    }

    //
    function chooseCommune(commune_id = 0) {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                commune_ix: commune_arr.findIndex(
                    (item) => item.id == commune_id
                ),
            };
        });
    }

    // ---------

    //
    function confirmFullAddress() {
        province_ix >= 0 &&
            handleChangeAddress({
                province: province_arr[province_ix].name,
                district:
                    district_ix >= 0 ? district_arr[district_ix].name : '',
                commune: commune_ix >= 0 ? commune_arr[commune_ix].name : '',
                num_home: ref_num_home.current.value,
            });
    }

    //
    return (
        <div className="PLChooseAddress brs-8px bg-primary box-shadow-fb">
            <div className="border-bottom-blur">
                <PLChooseAddressHead handleClose={closeScreen} />
            </div>

            <div className="PLChooseAddress_contain">
                <div className="margin-bottom-15px">
                    <strong>Chọn đầy đủ địa chỉ nhận hàng</strong> để biết chính
                    xác thời gian giao
                </div>

                <div className="margin-bottom-15px">
                    <PLChooseAddressInput
                        address_arr={province_arr}
                        address_name={
                            province_ix >= 0
                                ? province_arr[province_ix].name
                                : ''
                        }
                        has_fetched={province_has_fetched}
                        placeholder_address="Chon tinh, thanh"
                        placeholder_search="Tinh, thanh"
                        disabled={false}
                        //
                        getData_Address={getData_Province}
                        chooseAddress={chooseProvince}
                    />
                </div>

                <div className="margin-bottom-15px">
                    <PLChooseAddressInput
                        address_arr={district_arr}
                        address_name={
                            district_ix >= 0
                                ? district_arr[district_ix].name
                                : ''
                        }
                        has_fetched={district_has_fetched}
                        placeholder_address="Chon quan, huyen"
                        placeholder_search="Quan, huyen"
                        disabled={province_ix <= -1}
                        //
                        getData_Address={getData_District}
                        chooseAddress={chooseDistrict}
                    />
                </div>

                <div className="margin-bottom-15px">
                    <PLChooseAddressInput
                        address_arr={commune_arr}
                        address_name={
                            commune_ix >= 0 ? commune_arr[commune_ix].name : ''
                        }
                        has_fetched={commune_has_fetched}
                        placeholder_address="Chon phuong, xa"
                        placeholder_search="Phuong, xa"
                        disabled={district_ix <= -1}
                        //
                        getData_Address={getData_Commune}
                        chooseAddress={chooseCommune}
                    />
                </div>

                <div className="margin-bottom-15px">
                    <input
                        ref={ref_num_home}
                        className={`w-100per padding-10px border-blur brs-4px outline-none ${
                            commune_ix >= 0
                                ? ''
                                : 'pointer-events-none opacity-05'
                        }`}
                        defaultValue={num_home}
                        type="text"
                        placeholder="Chon so nha (khong bat buoc)"
                        disabled={commune_ix <= -1}
                    />
                </div>

                <div className="padding-10px">
                    <button
                        className={`PLChooseAddress_btn btn btn-hv btn-active w-100per padding-y-8px brs-6px text-align-center text-white text-upper font-600 ${
                            province_ix <= -1 ? 'opacity-05' : 'cursor-pointer'
                        }`}
                        type="button"
                        disabled={province_ix <= -1}
                        onClick={confirmFullAddress}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PLChooseAddress;
