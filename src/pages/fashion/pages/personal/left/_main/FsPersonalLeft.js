import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { link_fs_personal_arr } from '../_link/link';

import FsPLeftSubList from '../sub_list/FsPLeftSubList';
import FsPLeftHead from '../head/FsPLeftHead';
import FsPersonalIconClose from '../../icon_close/FsPersonalIconClose';
//
import './FsPersonalLeft.scss';

//
FsPersonalLeft.propTypes = {};

//
function FsPersonalLeft({ is_true, toggleBool }) {
    //
    return (
        <div className="FsPersonalLeft font-14px text-cap">
            <div className="flex-between-center margin-bottom-20px border-bottom-blur">
                <Link
                    className="text-primary-08"
                    to={`/fashion/user/account/profile`}
                >
                    <FsPLeftHead />
                </Link>

                {IS_MOBILE ? (
                    <FsPersonalIconClose
                        is_true={is_true}
                        toggleBool={toggleBool}
                    />
                ) : null}
            </div>

            <div>
                {link_fs_personal_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <NavLink
                            key={ix}
                            className="FsPersonalLeft_link display-flex align-items-center padding-8px text-primary-08"
                            activeClassName={`${
                                item.has_sub ? '' : 'color-fashion'
                            }`}
                            to={`/fashion/user/${item.link}`}
                        >
                            {item.Icon}

                            <div className="margin-left-10px">{item.title}</div>
                        </NavLink>

                        {item.has_sub ? (
                            <FsPLeftSubList
                                sub_list={item.sub_list}
                                is_show={location.pathname.startsWith(
                                    '/fashion/user/' + item.base_link
                                )}
                            />
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsPersonalLeft;
