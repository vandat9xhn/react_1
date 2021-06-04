import { useParams } from 'react-router-dom';

//
export function GetIdSlug(is_id = true, id_slug = 'id') {
    try {
        const params = useParams();

        return is_id ? +params[id_slug] : params[id_slug];
    } catch (err) {
        if (is_id) {
            return parseInt(location.pathname.split('/').slice(-1)[0]);
        }

        return location.pathname.split('/').slice(-1)[0];
    }
}
