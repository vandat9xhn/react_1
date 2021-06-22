// Deprecated
//
export function checkBodyHidden() {
    return document.getElementsByTagName('BODY')[0].style.overflowY == 'hidden';
}

//
export function changeBodyOverflowY(overflow_y='') {
    document
        .getElementsByTagName('BODY')[0]
        .style.setProperty('overflow-y', overflow_y);
}
