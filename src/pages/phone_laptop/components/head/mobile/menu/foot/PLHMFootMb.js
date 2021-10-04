import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
PLHMFootMb.propTypes = {};

//
function PLHMFootMb(props) {
    //
    return (
        <div className="PLHMFootMb padding-10px">
            <Link className="display-block margin-bottom-10px" to="">
                Lịch sử mua hàng
            </Link>

            <div className="margin-bottom-10px">
                <span>Tổng đài </span>

                <Link to="">1800.1060</Link>

                <span> (7:30 - 22:00)</span>
            </div>

            <div>
                <span>Xem </span>

                <Link to="">275</Link>

                <span> siêu thị (8:00 - 22:00)</span>
            </div>
        </div>
    );
}

export default PLHMFootMb;
