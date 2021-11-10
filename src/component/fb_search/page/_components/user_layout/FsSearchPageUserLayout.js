import React from 'react';
import PropTypes from 'prop-types';
//
import ActionPreviewProfile from '../../../../action_preview_profile/_main/ActionPreviewProfile';

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
        <div className="FsSearchPageUserLayout">
            <div className="display-flex">
                <div>
                    <ActionPreviewProfile
                        user_id={id}
                        title_action={
                            <img src={picture} alt="" width="60" height="60" />
                        }
                    />
                </div>

                <div className="flex-grow-1 flex-between-center">
                    <div>
                        <ActionPreviewProfile
                            user_id={id}
                            title_action={<div>{name}</div>}
                        />
                    </div>

                    {info_1 ? (
                        <div className="font-13px text-secondary">{info_1}</div>
                    ) : null}

                    {info_2 ? (
                        <div className="margin-top-10px text-secondary">
                            {info_2}
                        </div>
                    ) : null}
                </div>

                {Icon ? (
                    <div className="btn-icon-36px bg-fb cursor-pointer hv-bg-hv">
                        {Icon}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FsSearchPageUserLayout;
