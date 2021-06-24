//
export function makeRange(start = 0, end = 1) {
    return Array.from({ length: end - start }, (_, k) => k + start);
}
