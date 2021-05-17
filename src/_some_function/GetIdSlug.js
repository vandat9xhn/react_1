
// 
export function GetIdSlug(is_id=true) {
    if (is_id) {
        return parseInt(location.pathname.split('/').slice(-1)[0])
    }

    return location.pathname.split('/').slice(-1)[0]
}