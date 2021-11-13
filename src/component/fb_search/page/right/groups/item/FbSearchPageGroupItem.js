import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import FsSearchPageUserLayout from '../../../_components/user_layout/FsSearchPageUserLayout';
//
import './FbSearchPageGroupItem.scss';

//
FbSearchPageGroupItem.propTypes = {};

//
function FbSearchPageGroupItem({ group_obj }) {
    //
    const {
        id,
        name,
        picture,

        privacy,
        count_member,
        action_case,

        info_arr,
    } = group_obj;

    // -----

    //
    function handleAction(...params) {
        console.log(params);
    }

    //
    return (
        <div className="FbSearchPageGroupItem">
            <FsSearchPageUserLayout
                id={id}
                picture={picture}
                name={name}
                info_1={`${privacy} group · ${UnitNumber(count_member)} member${
                    count_member >= 2 ? 's' : ''
                }`}
                info_2={
                    <div>
                        {info_arr.map((item, ix) => (
                            <div key={ix}>{item.title}</div>
                        ))}
                    </div>
                }
                Icon={null}
            />
        </div>
    );
}

export default FbSearchPageGroupItem;
