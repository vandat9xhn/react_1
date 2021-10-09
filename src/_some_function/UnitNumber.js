//
export const UnitNumber = (num_int = 0, unit_arr = ['K', 'M', 'B']) => {
    if (num_int >= 1000000000) {
        return `${Math.floor(num_int / 100000000) / 10}${unit_arr[2]}`;
    }

    if (num_int >= 1000000) {
        return `${Math.floor(num_int / 100000) / 10}${unit_arr[1]}`;
    }

    if (num_int >= 1000) {
        return `${Math.floor(num_int / 100) / 10}${unit_arr[0]}`;
    }

    return num_int;
};
