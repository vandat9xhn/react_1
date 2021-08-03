//
export const getRandomNumber = (min = 0, max = 10000) => {
    return Math.round(Math.random() * (max - min) + min);
};

//
export const getRandomId = (max_id = 100000) => getRandomNumber(0, max_id);

//
export const getRandomNumberArr = ({
    count_min = 0,
    count_max = 4,
    min = 0,
    max = 10000,
}) => {
    const res_arr = [];
    const count = getRandomNumber(count_min, count_max);

    for (let i = 0; i < count; i++) {
        res_arr.push(getRandomNumber(min, max));
    }

    return res_arr;
};
