import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { link_fs_personal_arr } from '../_link/link';

import FsPLeftSubList from '../sub_list/FsPLeftSubList';
import FsPLeftHead from '../head/FsPLeftHead';
//
import './FsPersonalLeft.scss';

//
FsPersonalLeft.propTypes = {};

//
function FsPersonalLeft({}) {
    //
    return (
        <div className="FsPersonalLeft font-14px text-cap">
            <div className="margin-bottom-20px">
                <Link
                    className="text-primary-08"
                    to={`/fashion/user/account/profile`}
                >
                    <FsPLeftHead />
                </Link>
            </div>

            <div>
                {link_fs_personal_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <NavLink
                            key={ix}
                            className="FsPersonalLeft_link text-primary-08"
                            activeClassName={`${
                                item.has_sub ? '' : 'color-fashion'
                            }`}
                            to={`/fashion/user/${item.link}`}
                        >
                            <div className="display-flex align-items-center padding-8px">
                                <div>{item.Icon}</div>

                                <div className="margin-left-10px line-20px">
                                    {item.title}
                                </div>
                            </div>
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
