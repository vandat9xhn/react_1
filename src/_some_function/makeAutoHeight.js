//
export function makeElmAutoHeight(elm) {
    elm.style.height = 'auto';
    elm.style.height = elm.scrollHeight + 'px';
}

//
export function makeAutoHeight(e) {
    makeElmAutoHeight(e.target);
}
