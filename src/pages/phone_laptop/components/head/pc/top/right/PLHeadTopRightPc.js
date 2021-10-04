import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './PLHeadTopRightPc.scss';

//
PLHeadTopRightPc.propTypes = {};

//
function PLHeadTopRightPc(props) {
    //
    return (
        <div className="PLHeadTopRightPc h-100per">
            <div className="PLHeadTopRightPc_row display-flex align-items-center h-100per">
                {[
                    { name: '24h\nCông nghệ', link_to: '/phone-laptop' },
                    { name: 'Hỏi đáp', link_to: '/phone-laptop' },
                    { name: 'Game App', link_to: '/phone-laptop' },
                ].map((item, ix) => (
                    <Link
                        key={ix}
                        className="PLHeadTopRightPc_item display-flex-center h-100per padding-x-12px color-inherit hv-cl-gold"
                        to={item.link_to}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PLHeadTopRightPc;
