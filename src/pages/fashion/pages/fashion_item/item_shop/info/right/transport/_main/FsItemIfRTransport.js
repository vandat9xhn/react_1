import React from 'react';
import PropTypes from 'prop-types';

//
FsItemIfRTransport.propTypes = {};

//
function FsItemIfRTransport({ address, trans_price }) {
    //
    return (
        <div className="FsItemIfRTransport">
            <div className="display-flex">
                <div>
                    <span>Vận Chuyển</span>
                </div>

                <div>
                    <div>
                        <span>
                            Miễn Phí Vận Chuyển Miễn Phí Vận Chuyển khi đơn đạt
                            giá trị tối thiểu
                        </span>
                    </div>

                    <div>
                        <div>Vận Chuyển Tới</div>

                        <div>{address}</div>
                    </div>

                    <div>
                        <div>Phí Vận Chuyển</div>

                        <div>{trans_price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRTransport;
