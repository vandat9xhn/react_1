//
export function getIndexNextPrevArr(c_index = 0, count = 0, is_next = true) {
    if (c_index == 0 && !is_next) {
        return count - 1;
    }

    if (c_index == count - 1 && is_next) {
        return 0;
    }

    return c_index + (is_next ? 1 : -1);
}
