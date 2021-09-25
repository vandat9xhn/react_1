import React from 'react';
import PropTypes from 'prop-types';
//
import PLDetailPolicyItem from '../item/PLDetailPolicyItem';
//
import './PLDetailPolicy.scss';

//
PLDetailPolicy.propTypes = {};

//
function PLDetailPolicy({ policy_arr }) {
    //
    const policy_count = policy_arr.length;

    //
    return (
        <div className="PLDetailPolicy font-14px">
            <ul className="PLDetailPolicy_row display-flex flex-wrap list-none">
                {policy_arr.map((item, ix) => (
                    <li
                        key={item.id}
                        className={`PLDetailPolicy_item ${
                            policy_count % 2 == 0
                                ? ix >= policy_count - 2
                                    ? ''
                                    : 'border-bottom-blur'
                                : ix == policy_count - 1
                                ? ''
                                : 'border-bottom-blur'
                        }`}
                    >
                        <PLDetailPolicyItem
                            Icon={item.Icon}
                            info={item.info}
                            link_to={item.link_to}
                            link_target={item.link_target}
                            link_title={item.link_title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLDetailPolicy;
