import React from 'react';
import PropTypes from 'prop-types';
//
import AddDiv from '../../../../../../../../component/some_div/add_div/AddDiv';
//
import PfAboutEmail from '../email/_main/PfAboutEmail';
import PfAboutPhone from '../phone/_main/PfAboutPhone';
import PfAboutAddress from '../address/_main/PfAboutAddress';

//
PfAboutContact.propTypes = {};

//
function PfAboutContact({ phone_arr, address_arr, email_obj }) {
    //
    return (
        <div className="PfAboutContact">
            <h3 className="PfAbout_title">Contact info</h3>

            <div className="PfAbout_add">
                <PfAboutPhone phone_arr={phone_arr} />
            </div>

            <div className="PfAbout_add">
                <PfAboutAddress address_arr={address_arr} />
            </div>

            <div>
                <PfAboutEmail email_obj={email_obj} />
            </div>
        </div>
    );
}

export default PfAboutContact;
