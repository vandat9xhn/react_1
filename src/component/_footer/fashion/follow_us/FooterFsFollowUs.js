import React from 'react';
import PropTypes from 'prop-types';
//
import FooterLinkArr from '../../link_arr/FooterLinkArr';

//
FooterFsFollowUs.propTypes = {};

//
function FooterFsFollowUs({ link_arr, target }) {
    //
    return (
        <div className="FooterFsFollowUs">
            <FooterLinkArr
                title="Theo dõi chúng tôi"
                link_arr={link_arr}
                target={target}
            />
        </div>
    );
}

export default FooterFsFollowUs;
