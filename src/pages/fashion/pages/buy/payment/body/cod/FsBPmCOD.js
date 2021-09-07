import React from 'react';
import PropTypes from 'prop-types';
// 
import './FsBPmCOD.scss';

// 
FsBPmCOD.propTypes = {};

// 
function FsBPmCOD(props) {
    // 
    return (
        <div className="FsBPmCOD font-14px text-third">
            <div>
                <span>Thanh toán khi nhận hàngPhí thu hộ:</span>

                <span className="margin-left-20px">
                    ₫0 VNĐ. Ưu đãi về phí vận chuyển (nếu có) áp dụng cả với phí
                    thu hộ.
                </span>
            </div>
        </div>
    );
}

export default FsBPmCOD;
