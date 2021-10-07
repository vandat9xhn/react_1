import { getNewNumberWidthLimit } from './getNewNumberWidthLimit';

//
export function getCropPosition({
    new_x = 0,
    min_x = 0,
    max_x = 0,

    new_y = 0,
    min_y = 0,
    max_y = 0,
}) {
    const x = getNewNumberWidthLimit({
        new_num: new_x,
        min_num: min_x,
        max_num: max_x,
    });
    const y = getNewNumberWidthLimit({
        new_num: new_y,
        min_num: min_y,
        max_num: max_y,
    });

    return { x: x, y: y };
}
