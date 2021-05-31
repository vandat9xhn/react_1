//
export function joinArrayWithAnd(arr = ['']) {
    return arr.length == 1
        ? arr[0]
        : arr.slice(0, arr.length - 1).join(', ') + ' and ' + arr.slice(-1)[0];
}
