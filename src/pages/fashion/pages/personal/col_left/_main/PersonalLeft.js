import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// 
import SubList from '../sub_list/SubList';
// 
import './PersonalLeft.scss';
//
const list = [
    //
    {
        title: 'Personal',
        sub_list: [
            {
                title: 'Information',
                link: '/user/info',
            },
            {
                title: 'Contact',
                link: '/user/contact',
            },
        ],
    },
    //
    {
        title: 'Bill',
        sub_list: [
            {
                title: 'Buying',
                link: '/bill/buying',
            },
            {
                title: 'Cancel',
                link: '/bill/cancel',
            },
        ],
    },
    //
    {
        title: 'Notifications',
        link: '/notifications',
    },
    //
    {
        title: 'Promotion',
        sub_list: [
            {
                title: 'Voucher',
                link: '/promotion/voucher',
            },
            {
                title: 'Free Ship',
                link: '/promotion/free-ship',
            },
        ],
    },
];

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
            <div className="PersonalLeft_contain">
                <div className="PersonalLeft_row">
                    <ul className="PersonalLeft_list list-none">
                        {list.map((item, ix) => (
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
                                        <div
                                            className="PersonalLeft_block label-field"
                                            onClick={handleUnActiveIx}
                                        >
                                            {item.title}
                                        </div>
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PersonalLeft;
