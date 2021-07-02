//
export function definePositionY(ref_btn_elm, header_head = 55) {
    const { top, bottom } = ref_btn_elm.current.getBoundingClientRect();
    const h_top = top - header_head;
    const h_bottom = window.innerHeight - bottom;

    if (h_top > h_bottom) {
        return { position_y: 'top', max_height: h_top };
    }

    return { position_y: 'bottom', max_height: h_bottom };
}

//
export function definePositionX(
    child_width,
    ref_btn_elm,
    extra_transform_x = 0
) {
    const { left, right } = ref_btn_elm.current.getBoundingClientRect();
    const center = (left + right) / 2;

    const { width: window_width } = document
        .getElementsByTagName('HTML')[0]
        .getBoundingClientRect();

    if (center <= child_width / 2) {
        return {
            position_x: 'left-0',
            transform_x: `${-left + extra_transform_x}px`,
        };
    }
    
    if (window_width - center <= child_width / 2) {
        return {
            position_x: 'right-0',
            transform_x: `${right - extra_transform_x}px`,
        };
    }

    return { position_x: 'left-50per', transform_x: '-50%' };
}

//
export function definePositionXY({
    child_width,
    ref_btn_elm,
    extra_transform_x = 0,
    header_head = 55,
}) {
    return {
        ...definePositionX(child_width, ref_btn_elm, extra_transform_x),
        ...definePositionY(ref_btn_elm, header_head),
    };
}
