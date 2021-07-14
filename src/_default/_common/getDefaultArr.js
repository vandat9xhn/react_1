//
export const getDefaultArr = (funcMakeObj = () => ({}), min = 0, max = 1) => {
    const count = Math.round(Math.random() * (max - min) + min);
    let result = [];

    for (let i = 0; i < count; i++) {
        result = [...result, funcMakeObj()];
    }

    return result;
};
