import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsProfileCase from '../../../../../../actions_profile/case/_main/ActionsProfileCase';
//
import FsSearchPageUserLayout from '../../../../_components/user_layout/FsSearchPageUserLayout';
//
import './FbSearchPageItemUser.scss';

//
FbSearchPageItemUser.propTypes = {};

//
function FbSearchPageItemUser({ profile }) {
    //
    const {
        id,
        first_name,
        last_name,
        picture,

        info_1,
        info_2_arr,
        action_case,
    } = profile;

    // -----

    //
    function handleAction(...params) {
        console.log(params);
    }

    //
    return (
        <div className="FbSearchPageItemUser">
            <FsSearchPageUserLayout
                id={id}
                picture={picture}
                name={`${first_name} ${last_name}`}
                info_1={info_1}
                info_2={
                    <div>
                        {info_2_arr.map((item, ix) => (
                            <div key={ix}>{item}</div>
                        ))}
                    </div>
                }
                Icon={
                    <ActionsProfileCase
                        action_case={action_case}
                        user_id={id}
                        use_title={false}
                        handleAction={handleAction}
                    />
                }
            />
        </div>
    );
}

export default FbSearchPageItemUser;
