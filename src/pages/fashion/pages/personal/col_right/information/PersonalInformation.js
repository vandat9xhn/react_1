import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import SkeletonDiv from '../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import './PersonalInformation.scss';

//
const data_user_info = {
    name: 'My My',
    address: 'Vinh Phuc',
    phone: '0123456789',
    birth_day: '22-04-2001',
    mail: 'mymy@gmail.com',
};

//
PersonalInformation.propTypes = {};

//
function PersonalInformation(props) {
    //
    const [user_info_state, setUserInfoState] = useState({
        user_info: {
            name: '',
            address: '',
            phone: '',
            birth_day: '',
            mail: '',
        },

        has_fetch: false,
    });

    const { user_info, has_fetch } = user_info_state;

    const { name, address, phone, birth_day, mail } = user_info;

    //
    const mounted = useRef(true);

    //
    useEffect(() => {
        return () => {
            mounted.current = false;
        };
    }, []);

    //
    useEffect(() => {
        getData_API_Info();
    }, []);

    //
    function getData_API_Info() {
        setTimeout(() => {
            if (mounted.current) {
                const data = data_user_info;
                setUserInfoState({
                    user_info: data,
                    has_fetch: true,
                });
            }
        }, 500);
    }

    //
    return (
        <div className="PersonalInformation">
            <h2 className="PersonalInformation_title margin-0 text-align-center text-secondary">
                Information
            </h2>

            <div className={!has_fetch ? 'display-none' : ''}>
                <div className="padding-8px">
                    <div className="font-500">Full name:</div>

                    <div>{name}</div>
                </div>

                <div className="padding-8px">
                    <div className="font-500">Address:</div>

                    <div>{address}</div>
                </div>

                <div className="padding-8px">
                    <div className="font-500">Birth Day:</div>

                    <div>{birth_day}</div>
                </div>

                <div className="padding-8px">
                    <div className="font-500">Phone:</div>

                    <div>{phone}</div>
                </div>

                <div className="padding-8px">
                    <div className="font-500">Mail:</div>

                    <div>{mail}</div>
                </div>
            </div>

            {!has_fetch && (
                <div className="PersonalInformation_skeleton">
                    <SkeletonDiv num={10} />
                </div>
            )}
        </div>
    );
}

export default PersonalInformation;
