import { html_elm, initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function getPosAtElmY({ base_elm = initial_div_elm, header_head = 55 }) {
    const { top, bottom } = base_elm.getBoundingClientRect();
    const height_top = top - header_head;
    const height_bottom = innerHeight - bottom;

    if (height_top > height_bottom) {
        return {
            top_or_bottom: 'bottom',
            position_y: `100%`,
            transform_y: '0',
            max_height: height_top,
        };
    }

    return {
        top_or_bottom: 'top',
        position_y: `100%`,
        transform_y: '0',
        max_height: height_bottom,
    };
}

//
export function getPosAtElmX({ child_width = 0, base_elm = initial_div_elm }) {
    const { left, right } = base_elm.getBoundingClientRect();
    const center = (left + right) / 2;
    const child_haft_width = child_width / 2;
    const { width: window_width } = html_elm.getBoundingClientRect();

    if (center >= child_haft_width) {
        const right_width = window_width - center;

        // center
        if (right_width >= child_haft_width) {
            return {
                left_or_right: 'left',
                position_x: `50%`,
                transform_x: `-50%`,
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
export function getPosAtElm({
    child_width = 0,
    base_elm = initial_div_elm,
    header_head = 55,
}) {
    return {
        ...getPosAtElmX({ child_width: child_width, base_elm: base_elm }),
        ...getPosAtElmY({ base_elm: base_elm, header_head: header_head }),
    };
}
