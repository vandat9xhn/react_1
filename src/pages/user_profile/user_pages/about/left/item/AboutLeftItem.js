import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
AboutLeftItem.propTypes = {
    item: PropTypes.shape({
        search: PropTypes.string,
        title: PropTypes.string,
    }),
};

//
function AboutLeftItem({ item }) {
    //
    const { search, title } = item;

    //
    return (
        <Link
            to={search}
            replace
            className="normal-text w-100per"
        >
            <div
                className={`AboutLeftItem brs-8px padding-8px font-500 text-secondary ${
                    search == location.search
                        ? 'bg-fb-active text-blue'
                        : 'hv-bg-blur'
                }`}
            >
                {title}
            </div>
        </Link>
    );
}

export default AboutLeftItem;
