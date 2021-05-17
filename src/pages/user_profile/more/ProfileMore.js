import React from 'react';
import { NavLink } from 'react-router-dom';
//
import './ProfileMore.scss';

//
const link_sk = [
    { sk: '', title: 'Post' },
    { sk: 'friend', title: 'Friend' },
    { sk: 'pic', title: 'Picture' },
    { sk: 'intro', title: 'Introduce' },
];

//
function ProfileMore(props) {
    const { sk, onClickSk } = props;

    //
    return (
        <div className="ProfileMore">
            <div className="ProfileMore_contain">
                <ul className="ProfileMore__list">
                    {link_sk.map((item, ix) => (
                        <li key={`Profile_sk${ix}`}>
                            <NavLink
                                to={location.pathname + `${item.sk ? '?sk=': ''}${item.sk}`}
                                className="normal-text"
                                activeClassName={sk == item.sk ? 'nav-active' : ''}
                                replace
                                title={item.title}
                                onClick={() => onClickSk(item.sk)}
                            >
                                <div className="ProfileMore__item nav-text nav-bottom">
                                    {item.title}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfileMore;
