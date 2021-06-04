import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutYou from '../about_you/_main/PfAboutYou';
import PfAboutOtherName from '../other_name/_main/PfAboutOtherName';
import PfAboutFavour from '../favourite/_main/PfAboutFavour';
import AboutNoItem from '../../_component/no_item/AboutNoItem';

//
PfAboutDetails.propTypes = {};

//
function PfAboutDetails(props) {
    // 
    const user_name = ''

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
    const no_item = !(
        you_obj.title ||
        other_name_arr.length ||
        favour_obj.title
    );

    const has_fetched = true;

    //
    return (
        <div>
            <h3 className="PfAbout_title">
                Details about {user_name}
            </h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title={`No detail to show`}
                >
                    <div>
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
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutDetails;
