/**
 * @return
 * [arr_center, more_left, more_right]
 */
export function FuncPagination(count, num_side_center, current){
    const num_center = num_side_center * 2 + 1;
    //
    if (count <= 2) {
        return [[], false, false]
    }
    //
    if (count <= num_center + 2) {
        return [Array.from({ length: count - 2 }, (_, k) => k + 2), false, false]
    }
    //
    if (current <= num_side_center + 2) {
        return [Array.from({ length: num_center }, (_, k) => k + 2), false, true]
    }
    //
    if (current >= count - num_side_center - 1) {
        return [Array.from({ length: num_center }, (_, k) => count + k - num_center), true, false]
    }
    //
    return [Array.from({ length: num_center }, (_, k) => current + k - num_side_center), true, true]
}
