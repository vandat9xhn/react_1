//
export const getRandomFromArr = (arr = []) =>
    arr[Math.round(Math.random() * (arr.length - 1))];
