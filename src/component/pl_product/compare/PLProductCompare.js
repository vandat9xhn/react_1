import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import {
    addDeviceToCompare,
    removeDeviceFromCompare,
} from '../../../redux/slice/PLCompareSlice';
// 
import { openScreenNotice } from '../../_screen_once/notice/ScreenNotice';
//
import IconPlusSubtract from '../../../_icons_svg/_icon_plus_subtract/IconPlusSubtract';
// 
import PLCompareNoticeMax from '../../pl_compare/notice/max_device/PLCompareNoticeMax';

//
PLProductCompare.propTypes = {};

//
function PLProductCompare({ id, name, img, product_type }) {
    //
    const { device_arr, type } = useSelector((state) => state.pl_compare_obj);
    const dispatch = useDispatch();

    const added_compare = device_arr.some((item) => item.id == id);

    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    function onAddToCompare(e) {
        e.preventDefault();

        if (!added_compare && device_arr.length >= 3 && type == product_type) {
            openScreenNotice({
                openScreenOnce: openScreenOnce,
                ComponentNotice: <PLCompareNoticeMax />,
            });

            setTimeout(() => {
                closeScreenOnce();
            }, 1000);

            return;
        }

        dispatch(
            added_compare
                ? removeDeviceFromCompare({
                      device_ix: device_arr.findIndex((item) => item.id == id),
                  })
                : addDeviceToCompare({
                      new_device: {
                          id: id,
                          name: name,
                          img: img,
                      },
                      new_type: product_type,
                  })
        );
    }

    //
    return (
        <div className="PLProductCompare">
            <div
                className="inline-flex align-items-center text-blue cursor-pointer"
                onClick={onAddToCompare}
            >
                <div className="PhoneDetailHead_compare_icon display-flex-center brs-50 border-blue">
                    <IconPlusSubtract
                        size_icon="13px"
                        stroke="currentColor"
                        stroke_width="10"
                    />
                </div>

                <div className="margin-left-5px">
                    {added_compare ? 'Đã thêm so sánh' : 'So sánh'}
                </div>
            </div>
        </div>
    );
}

export default PLProductCompare;
