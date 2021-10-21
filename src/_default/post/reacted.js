import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_post_reacted_info_obj = () => {
    const reacted_ix_arr = getRandomBool()
        ? getRandomFromArr([[1, 2], [2], [0, 2, 4]])
        : [];

    //
    return {
        reacted_arr: [],
        reacted_ix_arr: reacted_ix_arr,
        reacted_count: reacted_ix_arr.length ? 6 : 0,
        user_type_like:
            reacted_ix_arr.length && getRandomBool()
                ? getRandomNumber(0, 5)
                : -2,
    };
};
