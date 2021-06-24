//
export function getLastDayOfMonth(month, year) {
    if (month == 12) {
        return 31;
    }

    return (
        (new Date(`${year}-${+month + 1}`) - new Date(`${year}-${month}`)) /
        86400000
    );
}

//
export function getDaysInMonth(month, year) {
    const last_day = getLastDayOfMonth(+month, +year);

    return Array.from({ length: last_day }, (_, k) => k + 1);
}
