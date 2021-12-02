import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
import ActionPreviewPage from '../../../../../../component/action_preview_page/_main/ActionPreviewPage';

//
function TitleAction({ link_to, picture }) {
    return (
        <Link to={link_to}>
            <img
                className="brs-50 object-fit-cover"
                src={picture}
                alt=""
                width="32"
                height="32"
            />
        </Link>
    );
}

//
GPAbMembersPics.propTypes = {};

//
function GPAbMembersPics({ member_arr, member_name_str }) {
    //
    return (
        <div className="GPAbMembersPics padding-bottom-16px">
            <div className="padding-y-10px">
                <ul className="display-flex list-none">
                    {member_arr.map((item, ix) => (
                        <li key={item.id} className="margin-right-4px">
                            {item.type == 'user' ? (
                                <ActionPreviewProfile
                                    user_id={item.id}
                                    title_action={
                                        <TitleAction
                                            link_to={`/profile/${item.id}`}
                                            picture={item.picture}
                                        />
                                    }
                                />
                            ) : (
                                <ActionPreviewPage
                                    page_id={item.id}
                                    title_action={
                                        <TitleAction
                                            link_to={`/page/${item.id}`}
                                            picture={item.picture}
                                        />
                                    }
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {member_name_str}
            </div>
        </div>
    );
}

export default GPAbMembersPics;
