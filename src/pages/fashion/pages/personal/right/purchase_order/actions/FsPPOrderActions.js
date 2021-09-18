import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPOrderActions.scss';

//
FsPPOrderActions.propTypes = {};

//
function FsPPOrderActions(props) {
    //
    return (
        <div className="FsPPOrderActions">
            <div className="FsPPOrderActions_thank flex-between-center border-bottom-blur">
                <div className="font-12px text-third">
                    Cảm ơn bạn đã mua sắm tại Shopee!
                </div>

                <button
                    type="button"
                    className="FsPPOrderActions_btn bg-fashion-red brs-3px btn btn-hv btn-active text-cap text-white cursor-pointer"
                >
                    Mua lại
                </button>
            </div>

            <div className="FsPPOrderActions_contact flex-end">
                <button
                    type="button"
                    className="FsPPOrderActions_btn btn-active border-blur brs-3px text-cap text-555 cursor-pointer hv-bg-hv"
                >
                    Liên hệ người bán
                </button>
            </div>
        </div>
    );
}

export default FsPPOrderActions;
