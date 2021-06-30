//
export function definePositionY(parent_y = 0, parent_height = 0) {
    const client_y_center = parent_y + parent_height / 2;

    const window_height = window.innerHeight;
    const header_head = 55;

    let position_y = '';
    let max_height = 0;

    if (client_y_center - header_head > window_height - client_y_center) {
        position_y = 'top';
        max_height = parent_y - header_head;
    } else {
        position_y = 'bottom';
        max_height = window_height - parent_y - parent_height;
    }

    return { position_y, max_height };
}

//
export function definePositionX(
    child_width = 0,
    parent_x = 0,
    parent_width = 0,

    extra_transform_x = 0
) {
    const client_x_center = parent_x + parent_width / 2;

    const { width: window_width } = document
        .getElementsByTagName('HTML')[0]
        .getBoundingClientRect();

    let transform_x = 0;

    if (client_x_center <= child_width / 2) {
        transform_x = child_width / 2 - client_x_center + extra_transform_x;
    } else if (window_width - client_x_center <= child_width / 2) {
        transform_x =
            window_width -
            client_x_center -
            child_width / 2 -
            extra_transform_x;
    }

    return { transform_x };
}

//
export function definePositionXY(
    child_width = 0,
    parent_x = 0,
    parent_width = 0,
    parent_y = 0,
    parent_height = 0,
    extra_transform_x = 0
) {
    const { transform_x } = definePositionX(
        child_width,
        parent_x,
        parent_width,
        extra_transform_x
    );

    const { position_y, max_height } = definePositionY(parent_y, parent_height);

    return { transform_x, position_y, max_height };
}
