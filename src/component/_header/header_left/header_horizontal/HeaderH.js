import React from 'react';
import { NavLink } from 'react-router-dom';

import IconsMenu  from '../../../../_icons_svg/icons_menu/IconsMenu';
import IconsProfile from '../../../../_icons_svg/icons_profile/IconsProfile';
import ArrowAndString from '../../../some_div/arrow_div/ArrowAndString';

import './HeaderH.scss';
//
function HeaderH() {
    const header_text = 'HeaderH__text header_item nav-bottom nav-text';

    return (
        <div className="HeaderH">
            <ul className="HeaderH__ul list-none display-flex">
                {/* home */}
                <li>
                    <NavLink
                        className="normal-text"
                        activeClassName="nav-active"
                        to="/home"
                    >
                        <div className={header_text} title="Home">
                            <IconsMenu x={200} />
                        </div>
                    </NavLink>
                </li>

                {/* phone */}
                <li>
                    <NavLink
                        className="normal-text"
                        activeClassName="nav-active"
                        to="/phone-laptop"
                    >
                        <div className={header_text} title="Phone">
                            <IconsProfile y={200} />
                        </div>
                    </NavLink>
                </li>

                {/* shopping */}
                <li>
                    <NavLink
                        className="normal-text"
                        activeClassName="nav-active"
                        to="/fashion"
                    >
                        <div className={header_text} title="Shopping">
                            <IconsMenu x={400} />
                        </div>
                    </NavLink>
                </li>

                {/* city */}
                <li>
                    <NavLink
                        className="normal-text"
                        activeClassName="nav-active"
                        to="/city-street"
                    >
                        <div className={header_text} title="City and street">
                            City
                        </div>
                    </NavLink>
                </li>

                {/* Hidden list */}
                <li className="HeaderH_learns">
                    {/* title */}
                    <div className={header_text}>
                        <ArrowAndString div_with="5rem" size_icon="0.7rem">
                            Learn
                        </ArrowAndString>
                    </div>

                    {/* list hidden */}
                    <div className="header_hidden HeaderH_learns-hidden">
                        <div className="header_hidden-contain HeaderH_learns-hidden-contain">
                            <ul className="list-none">
                                <li>
                                    <NavLink
                                        className="normal-text"
                                        activeClassName="nav-active"
                                        to="/learn-html"
                                    >
                                        <div className={`HeaderH__learn ${header_text}`} title="Learn HTML">
                                            Learn HTML
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default HeaderH;
