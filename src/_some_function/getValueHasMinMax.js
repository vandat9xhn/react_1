//
export function getValueHasMinMax(value = 0, min = 0, max = 0) {
    if (value <= min) {
        return min;
    }

    if (value >= max) {
        return max;
    }

    return value;
}
