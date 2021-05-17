//
export const UnitNumber = (num_int=0) => {
    if (num_int >= 1000000000) {
        return Math.floor(num_int / 100000000) / 10 + 'B'
    }

    if (num_int >= 1000000) {
        return Math.floor(num_int / 100000) / 10 + 'M'
    }

    if (num_int >= 1000) {
        return Math.floor(num_int / 100) / 10 + 'K'
    }

    return num_int
}