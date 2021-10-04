import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
PLHeadList.propTypes = {};

//
function PLHeadList({ title, link_arr }) {
    //
    return (
        <div className="PLHeadList">
            {title ? (
                <h2 className="PLHeadList_title width-fit-content line-18px font-size-inherit font-600 border-bottom-blur">
                    {title}
                </h2>
            ) : null}

            <div className="PLHeadList_contain">
                {link_arr.map((item, ix) => (
                    <Link
                        key={ix}
                        className="PLHeadList_item display-block padding-top-10px color-inherit hv-cl-blue"
                        to={item.link_to}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PLHeadList;
