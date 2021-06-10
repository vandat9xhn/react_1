//
export function addOrRemoveItem(old_arr = [], ix = 0) {
    return old_arr.includes(ix)
        ? old_arr.filter((item) => item != ix)
        : [...old_arr, ix];
}

//
export function ListOrEmpty(new_arr = [''] || [-1], arr = [''] || [-1]) {
    if (new_arr.length >= 1) {

        return new_arr;
    }

    return arr;
}

//
export function ListOrEmptyNumber(new_arr = [-1], count_arr) {
    return ListOrEmpty(
        new_arr,
        Array.from({ length: count_arr }, (_, k) => k)
    );
}

//
export function ListOrRegex(current_arr = [-1], arr = [''], is_reg = false) {
    const new_arr = current_arr.map((ix) => arr[ix]);

    if (is_reg) {
        return '(?i).*' + new_arr.join('|') + '.*';
    }

    return ListOrEmpty(new_arr, arr);
}