import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import DotCountNew from '../../../../../../../component/dot_count_new/DotCountNew';

//
WatchHomeNewItem.propTypes = {};

//
function WatchHomeNewItem({ item }) {
    //
    const { title, picture, time_str, link_to } = item;

    //
    return (
        <Link
            className="WatchHomeNewItem display-flex align-items-center h-100per padding-8px brs-6px hv-bg-blur color-inherit"
            to={link_to}
        >
            <div className="margin-right-12px">
                <img
                    className="brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width={60}
                    height={60}
                />
            </div>

            <div>
                <div className="font-17px">{title}</div>

                <div className="font-12px text-blue">
                    <DotCountNew title={time_str} />
                </div>
            </div>
        </Link>
    );
}

export default WatchHomeNewItem;
