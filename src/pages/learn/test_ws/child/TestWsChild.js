import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_PhoneLaptop_L } from '../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';

//
TestWsChild.propTypes = {};

//
function TestWsChild({ arr }) {
    //
    const [force_update, setForceUpdate] = useState(false);

    //
    useEffect(() => {
        getDataHeroku_Phone();
    }, []);

    //
    async function getDataHeroku_Phone() {
        const res = await API_PhoneLaptop_L({
            page: 1,
            size: 10,
        });

        console.log(res);
    }

    //
    function handleTestUpdate() {
        arr.push(arr.length + 1);
        setForceUpdate(!force_update);
    }

    console.log(arr);
    //
    return (
        <div>
            <div className="cursor-pointer" onClick={handleTestUpdate}>
                Test update
            </div>

            <div>
                {arr.map((item) => (
                    <div key={`TestWsChild_${item}`}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default TestWsChild;
