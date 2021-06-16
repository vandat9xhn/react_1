import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { data_personal_list } from '../_data/PersonalLeftDat';

import SubList from '../sub_list/SubList';
//
import './PersonalLeft.scss';

//
PersonalLeft.propTypes = {};

function PersonalLeft(props) {
    const { active_ix, handleChangeActiveIx } = props;

    //
    function onChangeActiveIx(ix) {
        handleChangeActiveIx(ix);
    }

    //
    function handleUnActiveIx() {
        handleChangeActiveIx(-1);
    }

    //
    return (
        <div className="PersonalLeft">
            <ul className="PersonalLeft_list list-none">
                {data_personal_list.map((item, ix) => (
                    <li key={`PersonalLeft_${ix}`}>
                        {item.sub_list ? (
                            <SubList
                                active_ix={active_ix}
                                item_ix={ix}
                                sub_list={item.sub_list}
                                title={item.title}
                                handleChangeActiveIx={onChangeActiveIx}
                            />
                        ) : (
                            <NavLink
                                className="normal-text"
                                activeClassName="text-blue"
                                to={`/fashion/personal${item.link}`}
                                replace
                            >
                                <h3
                                    className="padding-8px margin-0"
                                    onClick={handleUnActiveIx}
                                >
                                    {item.title}
                                </h3>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonalLeft;
