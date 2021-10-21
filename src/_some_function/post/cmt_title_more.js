// -----

//
function getPluralSingularReply(count_left = 0) {
    if (count_left <= 1) {
        return 'reply';
    }

    return 'replies';
}

//
function getPluralSingularCmt(count_left = 0) {
    if (count_left <= 1) {
        return 'comment';
    }

    return 'comments';
}

// ----

//
export function getCmtTitleMore({ count_left = 0 }) {
    return `View ${count_left} more ${getPluralSingularCmt(count_left)}`;
}

//
export function getReplyTitleAll({ count_left = 0 }) {
    return `${count_left} ${getPluralSingularReply(count_left)}`;
}

//
export function getReplyTitleMore({ count_left = 0 }) {
    return `View ${count_left} more ${getPluralSingularReply(count_left)}`;
}

//
export function getReplyTitleAllOrMore({ count_left = 0, is_all = false }) {
    if (is_all) {
        return getReplyTitleAll({ count_left: count_left });
    }

    return getReplyTitleMore({ count_left: count_left });
}
