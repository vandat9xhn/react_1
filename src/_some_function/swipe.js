import { getClientXY } from './getClientXY';

//
export function getPositionTouched(event) {
    return getClientXY(event);
}

//
export function swipeToLeftRightOrNot({
    client_x_start = 0,
    client_x_end = 0,
    enough_width = 0,
}) {
    const client_x_change = client_x_start - client_x_end;

    if (client_x_change >= enough_width) {
        return 'to_right';
    }

    if (client_x_change <= -enough_width) {
        return 'to_left';
    }

    return '';
}
