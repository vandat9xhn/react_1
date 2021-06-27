import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconDiv from '../../../../some_div/icon_div/IconDiv';
// 
import './HeaderHItemHasSub.scss';

//
HeaderHItemHasSub.propTypes = {};

//
function HeaderHItemHasSub({ item }) {
    //
    const { Icon, x, y, title, sub_list } = item;

    //
    return (
        <div className="HeaderHItemHasSub position-rel">
            <div className="HeaderHItemHasSub_icon HeaderH_item header_item header_item_horizontal">
                {Icon ? <Icon x={x} y={y} size_icon="1.8rem" /> : title}
            </div>

            <div className="HeaderHItemHasSub_sub header_hidden left-0">
                <div className="header_hidden-contain">
                    <ul className="list-none">
                        {sub_list.map((sub_item, ix) => (
                            <li key={`HeaderHItemHasSub_item_${ix}`}>
                                <NavLink
                                    className="normal-text"
                                    activeClassName="nav-active"
                                    to={sub_item.link_to}
                                >
                                    <h2 className="margin-0 header_item font-16px nav-text">
                                        {sub_item.Icon ? (
                                            <IconDiv
                                                Icon={sub_item.Icon}
                                                x={sub_item.x}
                                                y={sub_item.y}
                                                size_icon="1.8rem"
                                            >
                                                {sub_item.title}
                                            </IconDiv>
                                        ) : (
                                            sub_item.title
                                        )}
                                    </h2>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderHItemHasSub;
