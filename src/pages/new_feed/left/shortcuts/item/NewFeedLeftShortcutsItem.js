import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
NewFeedLeftShortcutsItem.propTypes = {};

//
function NewFeedLeftShortcutsItem({ id, name, picture }) {
    //
    return (
        <Link
            className="NewFeedLeftShortcutsItem display-block padding-8px brs-6px font-600 color-inherit hv-bg-blur"
            to={`/group/${id}/discuss`}
        >
            <div className="display-flex align-items-center">
                <img
                    className="brs-6px object-fit-cover"
                    src={picture}
                    alt=""
                    width="28"
                    height="28"
                />

                <div className="margin-left-12px text-nowrap">{name}</div>
            </div>
        </Link>
    );
}

export default NewFeedLeftShortcutsItem;
