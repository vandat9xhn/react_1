import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import shopee_insurance from '../../../../../../../../image/shopee_insurance.png';
import './FsItemIfRPrivacy.scss';

//
FsItemIfRPrivacy.propTypes = {};

//
function FsItemIfRPrivacy(props) {
    //
    return (
        <Link to="/fashion/privacy" className="normal-text font-14px">
            <div className="FsItemIfRPrivacy">
                <img src={shopee_insurance} alt="" height="20" width="20" />

                <span className="FsItemIfRPrivacy_center">Shopee Đảm Bảo</span>

                <span className="text-third">
                    3 Ngày Trả Hàng / Hoàn Tiền
                </span>
            </div>
        </Link>
    );
}

export default FsItemIfRPrivacy;
