import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './PLDetailPolicyItem.scss';

//
PLDetailPolicyItem.propTypes = {};

//
function PLDetailPolicyItem({ Icon, info, link_to, link_target, link_title }) {
    //
    return (
        <div className="PLDetailPolicyItem pos-rel">
            <div className="PLDetailPolicyItem_icon pos-abs left-0 top-0 padding-top-8px">
                {Icon}
            </div>

            <div>
                {info}{' '}
                <Link to={link_to} target={link_target}>
                    {link_title}
                </Link>
            </div>
        </div>
    );
}

export default PLDetailPolicyItem;
