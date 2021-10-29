import { html_elm, initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function getPosAtBodyX({
    child_width = 0,
    base_elm = initial_div_elm,
    x_always = '',
    transform_x_more = 0,
}) {
    const { left, right } = base_elm.getBoundingClientRect();
    const { width: window_width } = html_elm.getBoundingClientRect();

    // ---- ALWAYS LEFT
    if (x_always == 'left') {
        const new_left = left + transform_x_more;

        if (new_left <= 0) {
            return {
                left_or_right: 'left',
                position_x: `0px`,
                transform_x: `0px`,
            };
        }

        if (new_left + child_width >= window_width) {
            return {
                left_or_right: 'right',
                position_x: `0px`,
                transform_x: `0px`,
            };
        }

        return {
            left_or_right: 'left',
            position_x: `${new_left}px`,
            transform_x: `0px`,
        };
    }

    // ---- ALWAYS RIGHT
    if (x_always == 'right') {
        const new_right = right + transform_x_more;

        if (new_right >= window_width) {
            return {
                left_or_right: 'right',
                position_x: `0px`,
                transform_x: `0px`,
            };
        }

        if (new_right - child_width <= 0) {
            return {
                left_or_right: 'left',
                position_x: `0px`,
                transform_x: `0px`,
            };
        }

        return {
            left_or_right: 'right',
            position_x: `${window_width - new_right}px`,
            transform_x: `0px`,
        };
    }

    // -------- AUTO
    const center = (left + right) / 2;
    const child_haft_width = child_width / 2;
    const new_center = center + transform_x_more;

    if (new_center >= child_haft_width) {
        // new_center
        if (window_width - new_center >= child_haft_width) {
            return {
                left_or_right: 'left',
                position_x: `${new_center}px`,
                transform_x: `-50%`,
            };
        }

        // right
        return {
            left_or_right: 'right',
            position_x: `0px`,
            transform_x: `0px`,
        };
    }

    return {
        left_or_right: 'left',
        position_x: `0px`,
        transform_x: `0px`,
    };
}

//
export function getPosAtBodyY({
    base_elm = initial_div_elm,
    header_head = 55,
    y_always = '',
    transform_y_more = 0,
}) {
    const { top, bottom } = base_elm.getBoundingClientRect();
    const new_top = top + transform_y_more;
    const new_bottom = bottom + transform_y_more;

    const h_top = new_top - header_head;
    const h_bottom = innerHeight - new_bottom;

    if ((h_top > h_bottom && y_always == '') || y_always == 'bottom') {
        return {
            top_or_bottom: 'top',
            position_y: `${new_top + scrollY}px`,
            transform_y: '-100%',
            max_height: h_top,
        };
    }

    return {
        top_or_bottom: 'top',
        position_y: `${new_bottom + scrollY}px`,
        transform_y: '0%',
        max_height: h_bottom,
    };
}

//
export function getPosAtBody({
    child_width = 0,
    base_elm = initial_div_elm,
    header_head = 55,

    x_always = '',
    transform_x_more = 0,

    y_always = '',
    transform_y_more = 0,
}) {
    return {
        ...getPosAtBodyX({
            child_width: child_width,
            base_elm: base_elm,

            x_always: x_always,
            transform_x_more: transform_x_more,
        }),
        ...getPosAtBodyY({
            base_elm: base_elm,
            header_head: header_head,

            y_always: y_always,
            transform_y_more: transform_y_more,
        }),
    };
}
