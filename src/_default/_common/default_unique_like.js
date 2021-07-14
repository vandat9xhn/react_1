export const getDefaultUniqueLikeArr = () => {
    let result = [];
    const arr_like = [0, 1, 2, 3, 4, 5];

    for (let i = 0; i < 3; i++) {
        result.push(
            ...arr_like.splice(Math.round(Math.random() * (arr_like.length - 1)), 1)
        );
    }

    return result;
};
