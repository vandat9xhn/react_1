export const formatNum = (num) => {
    return new Intl.NumberFormat('en').format(num);
};