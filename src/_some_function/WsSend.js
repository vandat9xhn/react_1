//
export function WsSend(ws, params) {
    ws.send(JSON.stringify(params));
}
