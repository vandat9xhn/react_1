//
export function WsSend(ws, params) {
    ws.send(JSON.stringify(params));
}

//
export function handleWsTypes({
    ws_event = { data: '' },
    type_arr = [{ type: '', handleType: () => {}, data_type_obj: {} }],
}) {
    const data_ws_obj = JSON.parse(ws_event.data);
    const type_ix = type_arr.findIndex((item) => item.type == data_ws_obj.type);

    if (type_ix <= -1) {
        return;
    }

    const { handleType = () => {}, data_type_obj = {} } = type_arr[type_ix];

    handleType({ ...data_type_obj, ...data_ws_obj });
}
