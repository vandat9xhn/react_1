import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ActionPreviewProfile from '../../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
import ActionPreviewPage from '../../../../../../component/action_preview_page/_main/ActionPreviewPage';
//
import './GroupPageAffiliation.scss';

//
GroupPageAffiliation.propTypes = {};

//
function GroupPageAffiliation({ bg_btn, affiliation_obj }) {
    //
    const { to, id, name } = affiliation_obj;

    //
    return (
        <div
            className="GroupPageAffiliation padding-x-16px padding-y-10px font-600 bg-blue text-white"
            style={{
                backgroundColor: bg_btn || undefined,
                color: bg_btn ? 'white' : undefined,
            }}
        >
            <div className="display-flex">
                <div className="margin-right-8px">Group by</div>

                <div>
                    {to == 'user' ? (
                        <ActionPreviewProfile
                            user_id={id}
                            title_action={
                                <Link
                                    className="color-inherit hv-underline"
                                    to={`/profile/${id}`}
                                >
                                    {name}
                                </Link>
                            }
                        />
                    ) : (
                        <ActionPreviewPage
                            page_id={id}
                            title_action={
                                <Link
                                    className="color-inherit hv-underline"
                                    to={`/page/${id}`}
                                >
                                    {name}
                                </Link>
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default GroupPageAffiliation;
