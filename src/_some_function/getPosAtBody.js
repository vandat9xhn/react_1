import { html_elm, initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function getPosAtBodyY({
    base_elm = initial_div_elm,
    header_head = 55,
}) {
    const { top, bottom } = base_elm.getBoundingClientRect();
    const h_top = top - header_head;
    const h_bottom = window.innerHeight - bottom;

    if (h_top > h_bottom) {
        return {
            top_or_bottom: 'top',
            position_y: `${top + scrollY}px`,
            transform_y: '-100%',
            max_height: h_top,
        };
    }

    return {
        top_or_bottom: 'top',
        position_y: `${bottom + scrollY}px`,
        transform_y: '0%',
        max_height: h_bottom,
    };
}

//
export function getPosAtBodyX({ child_width = 0, base_elm = initial_div_elm }) {
    const { left, right } = base_elm.getBoundingClientRect();
    const center = (left + right) / 2;
    const child_haft_width = child_width / 2;

    const { width: window_width } = html_elm.getBoundingClientRect();

    if (center >= child_haft_width) {
        // center
        if (window_width - center >= child_haft_width) {
            return {
                left_or_right: 'left',
                position_x: `${center}px`,
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
export function getPosAtBody({
    child_width = 0,
    base_elm = initial_div_elm,
    header_head = 55,
}) {
    return {
        ...getPosAtBodyX({ child_width: child_width, base_elm: base_elm }),
        ...getPosAtBodyY({ base_elm: base_elm, header_head: header_head }),
    };
}
