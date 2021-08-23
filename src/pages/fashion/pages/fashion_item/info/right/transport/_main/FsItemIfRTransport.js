import React from 'react';
import PropTypes from 'prop-types';

//
FsItemIfRTransport.propTypes = {};

//
function FsItemIfRTransport({ address = 'Ha Noi', trans_price = 10000 }) {
    //
    return (
        <div className="FsItemIfRTransport">
            <div className="display-flex">
                <div className="fashion-item-label">
                    <span className="text-third">Vận Chuyển</span>
                </div>

                <div className="font-14px">
                    <div>Miễn Phí Vận Chuyển</div>

                    <div className="text-third">
                        <span>
                            Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                        </span>
                    </div>

                    <div className="display-flex">
                        <div className="padding-4px text-third">
                            Vận Chuyển Tới
                        </div>

                        <div className="padding-4px">{address}</div>
                    </div>

                    <div className="display-flex">
                        <div className="padding-4px text-third">
                            Phí Vận Chuyển
                        </div>

                        <div className="padding-4px">{trans_price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRTransport;
