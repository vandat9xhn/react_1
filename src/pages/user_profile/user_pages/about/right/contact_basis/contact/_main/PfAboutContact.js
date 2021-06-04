import React from 'react';
import PropTypes from 'prop-types';
//
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

import PfAboutEmail from '../email/_main/PfAboutEmail';
import PfAboutPhone from '../phone/_main/PfAboutPhone';
import PfAboutAddress from '../address/_main/PfAboutAddress';

//
PfAboutContact.propTypes = {};

//
function PfAboutContact({ phone_arr, address_arr, email_obj, has_fetched }) {
    // 
    const no_item = !(
        phone_arr.length ||
        address_arr.length ||
        email_obj.title
    );

    //
    return (
        <div className="PfAboutContact">
            <h3 className="PfAbout_title">Contact info</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No basis info to show"
                >
                    <div>
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
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutContact;
