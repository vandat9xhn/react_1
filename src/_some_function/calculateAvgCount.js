//
export function calculateAvgCount(arr) {
    const rate_total = arr.reduce((a, b, ix) => a + b * (ix + 1));
    const count = arr.reduce((a, b) => a + b);

    const avg =
        rate_total == 0 ? 0 : Math.round((rate_total * 10) / count) / 10;

    return { count, avg };
}
