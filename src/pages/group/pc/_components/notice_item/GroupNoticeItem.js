import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import UnitTime from '../../../../../_some_function/UnitTime';

//
GroupNoticeItem.propTypes = {};

//
function GroupNoticeItem({ item }) {
    //
    const {
        id,
        user,
        group_obj,

        notice_type,
        has_seen,
        created_time,
    } = item;

    //
    return (
        <Link
            className={`GroupNoticeItem display-block padding-8px brs-6px hv-bg-fb ${
                has_seen ? 'text-secondary' : 'color-inherit'
            }`}
            to={`/group/${group_obj.id}?post=${id}`}
        >
            <div className="display-flex align-items-center">
                <img
                    className="flex-shrink-0 brs-50 border-blur object-fit-cover"
                    src={user.picture}
                    alt=""
                    width="60"
                    height="60"
                />

                <div className="flex-grow-1 overflow-hidden margin-left-12px">
                    <div className="text-nowrap">
                        <span className="font-600">
                            {user.first_name} {user.last_name}
                        </span>

                        <span>{' posted in '}</span>

                        <span className="font-600">{group_obj.name}</span>
                    </div>

                    <div
                        className={`line-16px font-13px ${
                            has_seen ? '' : 'text-blue'
                        }`}
                    >
                        <span>
                            <span
                                className={`inline-block padding-4px brs-50 ${
                                    has_seen ? 'bg-ccc' : 'bg-current'
                                }`}
                            ></span>

                            <span className="margin-left-5px">
                                {UnitTime(
                                    new Date() - new Date(created_time),
                                    '1min'
                                )}{' '}
                                ago
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default GroupNoticeItem;
