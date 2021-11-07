import { createSlice } from '@reduxjs/toolkit';
//
import { parseCompareDevices } from '../../_some_function/phone/compareDevices';

//
const initialState = {
    device_arr: parseCompareDevices(),
    type: localStorage.compare_device_type || '',
};

//
export const PLCompareSlice = createSlice({
    name: 'pl_compare',
    initialState: initialState,
    reducers: {
        addDeviceToCompare: (state_obj, action) => {
            const { new_device, new_type } = action.payload;

            if (new_type == state_obj.type) {
                if (state_obj.device_arr.length < 3) {
                    state_obj.device_arr.push(new_device);
                }
            } else {
                state_obj.device_arr = [new_device];
                state_obj.type = new_type;
            }
        },

        //
        removeDeviceFromCompare: (state_obj, action) => {
            const { device_ix } = action.payload;

            state_obj.device_arr.splice(device_ix, 1);
        },

        //
        removeCompare: (state_obj) => {
            state_obj.device_arr = [];
        },
    },
});

//
export const { addDeviceToCompare, removeDeviceFromCompare, removeCompare } =
    PLCompareSlice.actions;

export default PLCompareSlice.reducer;
