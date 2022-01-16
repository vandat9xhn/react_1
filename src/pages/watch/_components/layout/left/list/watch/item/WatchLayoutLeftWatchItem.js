import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import DotCountNew from '../../../../../../../../component/dot_count_new/DotCountNew';

//
WatchLayoutLeftWatchItem.propTypes = {};

//
function WatchLayoutLeftWatchItem({ item }) {
    //
    const { name, picture, count_new, link_to } = item;

    //
    return (
        <NavLink
            className="display-flex align-items-center padding-8px brs-6px color-inherit hv-bg-blur"
            activeClassName="bg-blur"
            to={link_to}
        >
            <div className="margin-right-12px">
                <img
                    className="brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width={36}
                    height={36}
                />
            </div>

            <div>
                <div className="font-600">{name}</div>

                {count_new ? (
                    <div className="text-blue font-13px">
                        <DotCountNew
                            title={`${count_new <= 9 ? count_new : '9+'} video${
                                count_new >= 2 ? 's' : ''
                            }`}
                        />
                    </div>
                ) : null}
            </div>
        </NavLink>
    );
}

export default WatchLayoutLeftWatchItem;
