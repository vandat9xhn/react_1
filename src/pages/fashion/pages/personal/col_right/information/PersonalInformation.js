import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './PersonalInformation.scss';
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
const data_user_info = {
    name: 'My My',
    address: 'Vinh Phuc',
    phone: '0123456789',
    birth_day: '22-04-2001',
    mail: 'mymy@gmail.com',
}
//
PersonalInformation.propTypes = {
    
};

//
function PersonalInformation(props) {
    const [user_info, setUserInfo] = useState({})
    //
    const mounted = useRef(true)
    //
    useEffect(() => {
        setTimeout(() => {
            if (mounted.current) {
                const data = getDataInfo()
                setUserInfo(data)
            }
        }, 1000);

        return () => {
            mounted.current = false
        }
    }, [])
    //
    function getDataInfo() {
        return data_user_info;
    }


    //
    const {name, address, phone, birth_day, mail} = user_info;

    //
    return (
        <div className="PersonalInformation">
            <div className="PersonalInformation_contain">
                <div className="PersonalInformation_title fashion_title">Personal information</div>

                <div className={name == undefined ? 'display-none' : ''}>
                    <div className="PersonalInformation_block fashion_padding">
                        <div className="label-field">Full name:</div>
                        <div>{name}</div>
                    </div>

                    <div className="PersonalInformation_block fashion_padding">
                        <div className="label-field">Address:</div>
                        <div>{address}</div>
                    </div>

                    <div className="PersonalInformation_block fashion_padding">
                        <div className="label-field">Birth Day:</div>
                        <div>{birth_day}</div>
                    </div>

                    <div className="PersonalInformation_block fashion_padding">
                        <div className="label-field">Phone:</div>
                        <div>{phone}</div>
                    </div>

                    <div className="PersonalInformation_block fashion_padding">
                        <div className="label-field">Mail:</div>
                        <div>{mail}</div>
                    </div>
                </div>

                {name == undefined && <div className="PersonalInformation_skeleton"><SkeletonDiv num={10}/></div>}
            </div>
        </div>
    );
}

export default PersonalInformation;