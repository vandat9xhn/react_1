import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPAddressItem.scss';

//
FsPAddressItem.propTypes = {};

//
function FsPAddressItem({
    ix,
    is_last,

    name,
    phone,
    address,
    is_default,

    setDefault,
    handleFix,
    handleDelete,
}) {
    //
    function onSetDefault() {
        setDefault(ix);
    }

    //
    function onFix() {
        handleFix(ix);
    }

    //
    function onDelete() {
        handleDelete(ix);
    }

    //
    return (
        <div
            className={`FsPAddressItem text-555 ${
                is_last ? '' : 'FsPAddressItem-nth'
            }`}
        >
            <div className="FsPAddressItem_row display-flex space-between">
                <div className="FsPAddressItem_left flex-grow-1">
                    <div className="FsPAddressItem_left_row display-flex align-items-center margin-bottom-10px">
                        <div className="FsPAddressItem_label">Họ và tên</div>

                        <div className="display-flex">
                            <div className="FsPAddressItem_name font-16px line-22px">
                                {name}
                            </div>

                            {is_default ? (
                                <div>
                                    <div className="FsPAddressItem_default margin-left-10px padding-x-6px padding-y-3px brs-3px text-white font-13px line-15px">
                                        Mặc định
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="FsPAddressItem_left_row display-flex margin-bottom-10px">
                        <div className="FsPAddressItem_label">
                            Số điện thoại
                        </div>

                        <div className="font-14px">{phone}</div>
                    </div>

                    <div className="FsPAddressItem_left_row display-flex">
                        <div className="FsPAddressItem_label">Địa chỉ</div>

                        <div className="FsPAddressItem_address_item font-14px">
                            {address}
                        </div>
                    </div>
                </div>

                <div className="FsPAddressItem_right font-14px">
                    <div className="FsPAddressItem_right_head padding-y-10px text-align-end">
                        <button
                            className="FsPAddressItem_btn_fix_del border-none bg-transparent text-555 cursor-pointer"
                            type="button"
                            onClick={onFix}
                        >
                            Sửa
                        </button>

                        {is_default ? null : (
                            <button
                                className="FsPAddressItem_btn_fix_del margin-left-10px border-none bg-transparent text-555 cursor-pointer"
                                type="button"
                                onClick={onDelete}
                            >
                                Xóa
                            </button>
                        )}
                    </div>

                    {is_default ? null : (
                        <div className="FsPAddressItem_right_foot margin-top-15px">
                            <button
                                className="FsPAddressItem_set_default btn-hv btn-active padding-y-5px padding-x-10px border-blur text-cap text-third cursor-pointer"
                                type="button"
                                onClick={onSetDefault}
                            >
                                Thiết lập mặc định
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FsPAddressItem;
