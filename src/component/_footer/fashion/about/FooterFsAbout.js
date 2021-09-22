import React from 'react';
import PropTypes from 'prop-types';
//
import FooterLinkArr from '../../link_arr/FooterLinkArr';

//
FooterFsAbout.propTypes = {};

//
function FooterFsAbout({ link_arr }) {
    //
    return (
        <div className="FooterFsAbout">
            <FooterLinkArr title="Về chúng tôi" link_arr={link_arr} />
        </div>
    );
}

export default FooterFsAbout;
