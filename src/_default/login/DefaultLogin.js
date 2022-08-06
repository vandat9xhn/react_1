import { getRandomImg } from "../_common/default_image";
import { getRandomName } from "../_common/default_name";

//
export const default_define_user = {
    id: 1,
    first_name: getRandomName(),
    last_name: getRandomName(),
    picture: getRandomImg(),
};

//
export const changeDefaultDefineUser = ({
    id = default_define_user.id,
    first_name = default_define_user.first_name,
    last_name = default_define_user.last_name,
    picture = default_define_user.picture,
}) => {
    default_define_user.id = id;
    default_define_user.first_name = first_name;
    default_define_user.last_name = last_name;
    default_define_user.picture = picture;
};

//
export const default_login = {
    ...default_define_user,
    access: "",
    life_time: new Date().getTime(),
};
