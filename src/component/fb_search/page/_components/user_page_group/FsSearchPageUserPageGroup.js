import React from 'react';
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';
//
import './FsSearchPageUserPageGroup.scss';

//
FsSearchPageUserPageGroup.propTypes = {};

//
function FsSearchPageUserPageGroup({
    id,
    picture,
    name,

    PicComponent,
    NameComponent,
    link_to,
    action_img_props,
    action_name_props,

    info_1,
    info_2,
    Icon,
}) {
    //
    return (
        <div className="FsSearchPageUserPageGroup fb-search-page-right-item-contain padding-16px bg-primary brs-8px box-shadow-1">
            <div className="display-flex">
                <div className="margin-right-12px">
                    <PicComponent
                        title_action={
                            <Link
                                className="display-block brs-50 overflow-hidden hv-after-shadow-05"
                                to={link_to}
                            >
                                <img
                                    className="FsSearchPageUserPageGroup_pic brs-50 border-blur object-fit-cover"
                                    src={picture}
                                    alt=""
                                    width="60"
                                    height="60"
                                />
                            </Link>
                        }
                        {...action_img_props}
                    />
                </div>

                <div className="flex-grow-1 flex-between-center">
                    <div>
                        <div className="display-flex">
                            <NameComponent
                                title_action={
                                    <Link
                                        className="color-inherit"
                                        to={link_to}
                                    >
                                        <div className="font-600">{name}</div>
                                    </Link>
                                }
                                {...action_name_props}
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

                    {Icon ? <div className="flex-shrink-0">{Icon}</div> : null}
                </div>
            </div>
        </div>
    );
}

export default FsSearchPageUserPageGroup;
