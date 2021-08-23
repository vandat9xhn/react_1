import { formatNum } from './FormatNum';

//
export function makePriceToPrice(price, price_max) {
    return `${formatNum(price)}  ${
        price_max ? `- ${formatNum(price_max)}` : ''
    }`;
}
