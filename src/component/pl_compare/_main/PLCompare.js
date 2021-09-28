import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//
import {
    addDeviceToCompare,
    removeDeviceFromCompare,
    removeCompare,
} from '../../../redux/slice/PLCompareSlice';
//
import { useBool } from '../../../_hooks/useBool';
//
import PLCompareItem from '../item/PLCompareItem';
import PLCompareActions from '../actions/PLCompareActions';
import PLCompareAdd from '../add/PLCompareAdd';
import PLCompareBtnShow from '../btn_show/PLCompareBtnShow';
import PLCompareBtnHide from '../btn_hide/PLCompareBtnHide';
//
import './PLCompare.scss';
import { stringifyCompareDevices } from '../../../_some_function/phone/compareDevices';

//
PLCompare.propTypes = {};

//
function PLCompare(props) {
    //
    const { device_arr, type } = useSelector((state) => state.pl_compare_obj);
    const dispatch = useDispatch();

    //
    const ref_pl_compare_obj = useRef({ device_arr: device_arr, type: type });

    //
    const { is_true, setIsTrue, toggleBool } = useBool(true);

    //
    useEffect(() => {
        device_arr.length > 0 && setIsTrue(true);

        ref_pl_compare_obj.current = { device_arr: device_arr, type: type };
    }, [device_arr.length, type]);

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // ------

    function handleBeforeUnload() {
        localStorage.compare_devices_str = stringifyCompareDevices(
            ref_pl_compare_obj.current.device_arr
        );
        localStorage.compare_device_type = ref_pl_compare_obj.current.type;
    }

    // ------

    //
    function removeCompareItem(ix) {
        dispatch(
            removeDeviceFromCompare({
                device_ix: ix,
            })
        );
    }

    //
    function onRemoveCompare() {
        dispatch(removeCompare());
    }

    //
    function addCompareItem(ix) {
        console.log(ix);
    }

    // -------

    if (device_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="PLCompare">
            <div
                className={`PLCompare_contain pos-fixed bottom-0 x-center border-blur bg-primary box-shadow-fb ${
                    is_true ? '' : 'display-none'
                }`}
            >
                <PLCompareBtnHide hideCompare={toggleBool} />

                <div className="display-flex">
                    <ul className="display-flex list-none flex-grow-1">
                        {device_arr.map((item, ix) => (
                            <li key={item.id} className="PLCompare_item">
                                <PLCompareItem
                                    ix={ix}
                                    name={item.name}
                                    img={item.img}
                                    removeCompareItem={removeCompareItem}
                                />
                            </li>
                        ))}

                        {device_arr.length.length >= 3
                            ? null
                            : Array(3 - device_arr.length)
                                  .fill(1)
                                  .map((_, ix) => (
                                      <li key={ix} className="PLCompare_item">
                                          <PLCompareAdd
                                              ix={ix}
                                              addCompareItem={addCompareItem}
                                          />
                                      </li>
                                  ))}
                    </ul>

                    <div className="PLCompare_actions">
                        <PLCompareActions
                            device_count={device_arr.length}
                            removeCompare={onRemoveCompare}
                        />
                    </div>
                </div>
            </div>

            <PLCompareBtnShow
                count={device_arr.length}
                is_show={is_true}
                showCompare={toggleBool}
            />
        </div>
    );
}

export default PLCompare;
