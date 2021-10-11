//
export function getBgColorOrImg({ bg = '', is_bg_img = false }) {
    if (is_bg_img) {
        return {
            backgroundImage: `url(${bg})`,
        };
    }

    return {
        backgroundColor: bg,
    };
}
