/* ---------------- */

export function definePositionXFromParent({
    parent_elm = document.getElementsByTagName('html')[0],
    btn_elm,
}) {
    const { left: l_parent, right: r_parent } =
        parent_elm.getBoundingClientRect();

    //
    const scroll_left_parent = parent_elm.offsetLeft;

    const { left: l_btn, right: r_btn } = btn_elm.getBoundingClientRect();

    const x_0 = l_btn - l_parent + scroll_left_parent;

    const w_left = l_btn - l_parent;
    const w_right = r_parent - r_btn;

    return { x_0, w_left, w_right };
}

//
export function definePositionYFromParent({
    parent_elm = document.getElementsByTagName('html')[0],
    btn_elm,
}) {
    const { bottom: b_parent, top: t_parent } =
        parent_elm.getBoundingClientRect();

    //
    const scroll_top_parent = parent_elm.offsetTop;

    const { bottom: b_btn, top: t_btn } = btn_elm.getBoundingClientRect();
    const y_0 = t_btn - t_parent + scroll_top_parent;

    const h_top = t_btn - t_parent;
    const h_bottom = b_parent - b_btn;

    return { y_0, h_top, h_bottom };
}

//
export function definePositionFromParent({
    parent_elm = document.getElementsByTagName('html')[0],
    btn_elm,
}) {
    return {
        ...definePositionXFromParent({ parent_elm, btn_elm }),
        ...definePositionYFromParent({ parent_elm, btn_elm }),
    };
}
