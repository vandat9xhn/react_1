import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import PLChooseAddress from '../_main/PLChooseAddress';
//
import './PLChooseAddressScreen.scss';

//
PLChooseAddressScreen.propTypes = {};

//
function PLChooseAddressScreen({ closeScreen }) {
    //
    const { forceUpdateApp, closeScreenFloor } = useContext(context_api);

    //
    useMakeBodyHidden();

    // ----

    //
    function handleChangeAddress({ province, district, commune, num_home }) {
        const address_arr = [province, district, commune, num_home];
        const address = address_arr
            .slice(
                0,
                address_arr.findIndex((item) => !item)
            )
            .join(', ');

        localStorage.pl_province = province;
        localStorage.pl_district = district;
        localStorage.pl_commune = commune;
        localStorage.pl_num_home = num_home;
        localStorage.pl_address = address;

        forceUpdateApp();
        closeScreenFloor();
    }

    //
    return (
        <div className="PLChooseAddressScreen">
            <PLChooseAddress
                province={localStorage.pl_province}
                district={localStorage.pl_district}
                commune={localStorage.pl_commune}
                num_home={localStorage.pl_num_home}
                handleChangeAddress={handleChangeAddress}
                closeScreen={closeScreen}
            />
        </div>
    );
}

export default PLChooseAddressScreen;
