import React from 'react';
import PropTypes from 'prop-types';
//
import ActionPreviewProfile from '../../../../action_preview_profile/_main/ActionPreviewProfile';
//
import './FsSearchPageUserLayout.scss';

//
FsSearchPageUserLayout.propTypes = {};

//
function FsSearchPageUserLayout({
    id,
    picture,
    name,

    info_1,
    info_2,
    Icon,
}) {
    //
    return (
        <div className="FsSearchPageUserLayout fb-search-page-right-item-contain padding-16px bg-primary brs-8px box-shadow-1">
            <div className="display-flex">
                <div className="margin-right-12px">
                    <ActionPreviewProfile
                        user_id={id}
                        title_action={
                            <img
                                className="FsSearchPageUserLayout_pic brs-50 object-fit-cover"
                                src={picture}
                                alt=""
                                width="60"
                                height="60"
                            />
                        }
                    />
                </div>

                <div className="flex-grow-1 flex-between-center">
                    <div>
                        <div className="display-flex">
                            <ActionPreviewProfile
                                user_id={id}
                                title_action={
                                    <div className="font-600">{name}</div>
                                }
                            />
                        </div>

                        {info_1 ? (
                            <div className="font-13px text-secondary">
                                {info_1}
                            </div>
                        ) : null}

                        {info_2 ? (
                            <div className="margin-top-10px text-secondary">
                                {info_2}
                            </div>
                        ) : null}
                    </div>

                    {Icon ? Icon : null}
                </div>
            </div>
        </div>
    );
}

export default FsSearchPageUserLayout;
