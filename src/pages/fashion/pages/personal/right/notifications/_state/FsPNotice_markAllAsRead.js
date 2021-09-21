//
export function FsPNotice_markAllAsRead({ setDataState }) {
    setDataState((data_state) => {
        const new_data_arr = [...data_state.data_arr];
        
        new_data_arr.forEach((item) => {
            item.has_read = true;
        });

        return {
            ...data_state,
            data_arr: new_data_arr,
        };
    });
}
