import { getRandomBool } from '../_common/default_bool';
import { getRandomNumber } from '../_common/default_id';
import { getRandomFromArr } from '../_common/getRandomFromArr';

//
export const default_post_reacted_info_obj = () => {
    const reacted_ix_arr =
        getRandomBool() || true
            ? getRandomFromArr([
                //   [getRandomNumber(0, 2), getRandomNumber(3, 5)],
                  [getRandomNumber(0, 5)],
                //   [
                //       getRandomNumber(0, 1),
                //       getRandomNumber(2, 3),
                //       getRandomNumber(4, 5),
                //   ],
                //   [],
              ])
            : [];

    //
    return {
        reacted_arr: [],
        reacted_ix_arr: reacted_ix_arr,
        reacted_count: reacted_ix_arr.length ? 6 : 0,
        user_reacted_ix:
            reacted_ix_arr.length && getRandomBool()
                ? getRandomNumber(0, 5)
                : -2,
    };
};

//
export const default_post_reacted_info_total_arr = () => {
    return [
        { reacted_ix: 0, count: getRandomNumber(1, 10) },
        { reacted_ix: 2, count: getRandomNumber(1, 10) },
        { reacted_ix: 5, count: getRandomNumber(1, 10) },
    ];
};
