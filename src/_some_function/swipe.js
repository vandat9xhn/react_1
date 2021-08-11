import { getClientXY } from "./getClientXY";

//
export function getPositionTouched(event) {
    return getClientXY(event)
}

//
export function swipeToLeftRightOrNot(client_x_start, client_x_end, enough_width) {
    const client_x_change = client_x_start - client_x_end;

    if (client_x_change >= enough_width) {
        return 'to_right';
    }

    if (client_x_change <= -enough_width) {
        return 'to_left';
    }

    return '';
}
