import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
GPMemsPartTitle.propTypes = {};

//
function GPMemsPartTitle({
    title,
    count,
    show_count = true,
    info,

    has_learn_more,
    link_learn_more,
}) {
    //
    return (
        <div className="GPMemsPartTitle">
            <h3 className="font-15px">
                <span className="font-600">{title}</span>
                {show_count ? (
                    <span className="text-secondary"> · {count}</span>
                ) : (
                    false
                )}
            </h3>

            <div className="font-13px text-secondary">
                {info}{' '}
                {has_learn_more ? (
                    <Link className="hv-underline" to={link_learn_more}>
                        Learn more
                    </Link>
                ) : null}
            </div>
        </div>
    );
}

export default GPMemsPartTitle;
