//
export function getCarouselList({ list = [] }) {
    return [list.slice(-1)[0], ...list, list[0]];
}
