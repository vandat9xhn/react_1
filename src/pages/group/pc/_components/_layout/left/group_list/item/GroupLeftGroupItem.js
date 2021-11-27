import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import UnitTime from '../../../../../../../../_some_function/UnitTime';
//
import IconPinned from '../../../../../../../../_icons_svg/pinned/IconPinned';

//
GroupLeftGroupItem.propTypes = {};

//
function GroupLeftGroupItem({ item }) {
    //
    const { id, name, picture, pinned, new_post_count, last_active_time } =
        item;

    //
    return (
        <Link
            className="GroupLeftGroupItem display-flex align-items-center padding-8px brs-6px color-inherit hv-bg-fb"
            to={`/group/${id}`}
        >
            <img
                className="flex-shrink-0 brs-8px border-blur object-fit-cover"
                src={picture}
                alt=""
                width="60"
                height="60"
            />

            <div className="flex-grow-1 display-flex space-between margin-left-12px overflow-hidden">
                <div>
                    <div className="wk-box-vertical line-clamp-2 overflow-hidden font-500">
                        {name}
                    </div>

                    <div className="line-16px font-13px text-secondary">
                        {new_post_count > 0 ? (
                            <span>
                                <span className="inline-block padding-4px brs-50 bg-blue"></span>

                                <span className="margin-left-5px">
                                    {new_post_count} post
                                    {new_post_count >= 2 ? 's' : ''} for you
                                </span>
                            </span>
                        ) : (
                            <span>
                                Last active{' '}
                                {UnitTime(
                                    new Date() - new Date(last_active_time),
                                    '1min'
                                )}{' '}
                                ago
                            </span>
                        )}
                    </div>
                </div>

                {pinned ? (
                    <div className="flex-shrink-0 text-third">
                        <IconPinned size_icon="20px" />
                    </div>
                ) : null}
            </div>
        </Link>
    );
}

export default GroupLeftGroupItem;
