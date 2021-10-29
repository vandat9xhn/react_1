import { html_elm, initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function getPosAtElmX({
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
                transform_x: `${-left}px`,
            };
        }

        if (new_left + child_width >= window_width) {
            return {
                left_or_right: 'right',
                position_x: `0px`,
                transform_x: `${window_width - right}`,
            };
        }

        return {
            left_or_right: 'left',
            position_x: `0px`,
            transform_x: `${transform_x_more}px`,
        };
    }

    // ---- ALWAYS RIGHT
    if (x_always == 'right') {
        const new_right = right + transform_x_more;

        if (new_right >= window_width) {
            return {
                left_or_right: 'right',
                position_x: `0px`,
                transform_x: `${window_width - right}px`,
            };
        }

        if (new_right - child_width <= 0) {
            return {
                left_or_right: 'left',
                position_x: `0px`,
                transform_x: `${left}px`,
            };
        }

        return {
            left_or_right: 'right',
            position_x: `0px`,
            transform_x: `${transform_x_more}px`,
        };
    }

    // -------- AUTO
    const center = (left + right) / 2;
    const child_haft_width = child_width / 2;
    const new_center = center + transform_x_more;

    if (new_center >= child_haft_width) {
        const right_width = window_width - new_center;

        // new_center
        if (right_width >= child_haft_width) {
            return {
                left_or_right: 'left',
                position_x: `50%`,
                transform_x: `calc(-50% + ${transform_x_more}px)`,
            };
        }

        // right
        return {
            left_or_right: 'right',
            position_x: `0px`,
            transform_x: `${window_width - right}px`,
        };
    }

    return {
        left_or_right: 'left',
        position_x: `0px`,
        transform_x: `${-left}px`,
    };
}

//
export function getPosAtElmY({
    base_elm = initial_div_elm,
    header_head = 55,
    y_always = '',
    transform_y_more = 0,
}) {
    const { top, bottom } = base_elm.getBoundingClientRect();
    const h_top = top + transform_y_more - header_head;
    const h_bottom = innerHeight - (bottom + transform_y_more);

    if ((h_top > h_bottom && y_always == '') || y_always == 'bottom') {
        return {
            top_or_bottom: 'bottom',
            position_y: `100%`,
            transform_y: `${transform_y_more}px`,
            max_height: h_top,
        };
    }

    return {
        top_or_bottom: 'top',
        position_y: `100%`,
        transform_y: `${transform_y_more}px`,
        max_height: h_bottom,
    };
}

//
export function getPosAtElm({
    child_width = 0,
    base_elm = initial_div_elm,
    header_head = 55,

    x_always = '',
    transform_x_more = 0,

    y_always = '',
    transform_y_more = 0,
}) {
    return {
        ...getPosAtElmX({
            child_width: child_width,
            base_elm: base_elm,

            x_always: x_always,
            transform_x_more: transform_x_more,
        }),
        ...getPosAtElmY({
            base_elm: base_elm,
            header_head: header_head,

            y_always: y_always,
            transform_y_more: transform_y_more,
        }),
    };
}
