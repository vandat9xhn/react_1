import React from 'react';
import PropTypes from 'prop-types';
//
import FooterLinkArr from '../../link_arr/FooterLinkArr';

//
FooterFsService.propTypes = {};

//
function FooterFsService({ link_arr }) {
    //
    return (
        <div className="FooterFsService">
            <FooterLinkArr title="Chăm sóc khách hàng" link_arr={link_arr} />
        </div>
    );
}

export default FooterFsService;
