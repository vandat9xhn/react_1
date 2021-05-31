import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutContact from '../contact/_main/PfAboutContact';
import PfAboutBasis from '../basis/_main/PfAboutBasis';
//
import './PfAboutContactBasis.scss';

//
PfAboutContactBasis.propTypes = {};

//
function PfAboutContactBasis(props) {
    const email_obj = {
        id: 1,
        title: 'mymy@gmail.com',
        email: 'mymy@gmail.com',
        permission: 0,
    };

    const phone_arr = [
        {
            id: 1,
            title: '0123456789',
            phone: '0123456789',
            permission: 0,
        },
        {
            id: 2,
            title: '9876543210',
            phone: '9876543210',
            permission: 0,
        },
    ];

    const address_arr = [
        {
            id: 1,
            title: 'Ha Noi',
            address: 'Ha Noi',
            permission: 0,
        },
        {
            id: 2,
            title: 'Vinh Phuc',
            address: 'Vinh Phuc',
            permission: 0,
        },
    ];

    //
    return (
        <div>
            <div className="PfAbout_part">
                <PfAboutContact
                    phone_arr={phone_arr}
                    email_obj={email_obj}
                    address_arr={address_arr}
                />
            </div>

            <div className="PfAbout_part">
                <PfAboutBasis />
            </div>
        </div>
    );
}

export default PfAboutContactBasis;
