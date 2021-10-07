//
export function getNewNumberWidthLimit({
    max_num = 0,
    min_num = 0,
    new_num = 0,
}) {
    if (new_num <= min_num) {
        return min_num;
    } else if (new_num >= max_num) {
        return max_num;
    }

    return new_num;
}
