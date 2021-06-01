import React from 'react';
import PropTypes from 'prop-types';
//
import PfAboutYou from '../about_you/_main/PfAboutYou';
import PfAboutOtherName from '../other_name/_main/PfAboutOtherName';
import PfAboutFavour from '../favourite/_main/PfAboutFavour';

//
PfAboutDetails.propTypes = {};

//
function PfAboutDetails(props) {
    //
    const you_obj = {
        you: '',
        permission: 0,
    };

    //
    const other_name_arr = [
        // {
        //     other_name: '',
        //     permission: 0,
        // },
    ];

    //
    const favour_obj = {
        favour: '',
        permission: 0,
    };

    //
    return (
        <div>
            <h3 className="PfAbout_title">Details</h3>

            <div className="PfAbout_part">
                <PfAboutYou you_obj={you_obj} />
            </div>

            <div className="PfAbout_part">
                <PfAboutOtherName other_name_arr={other_name_arr} />
            </div>

            <div className="PfAbout_part">
                <PfAboutFavour favour_obj={favour_obj} />
            </div>
        </div>
    );
}

export default PfAboutDetails;
