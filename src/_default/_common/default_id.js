//
export const getRandomNumber = (min = 0, max = 10000) =>
    Math.round(Math.random() * (max - min) + min);

//
export const getRandomId = (max_id = 100000) => getRandomNumber(0, max_id)
