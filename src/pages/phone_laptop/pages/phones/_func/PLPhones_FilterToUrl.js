import { INITIAL_PL_PHONES_STATE } from '../../../../../_initial/phone/pl_phones';

// Filter Data to URL

//
export function PLPhones_getSearchObj({
    filter_arr = INITIAL_PL_PHONES_STATE.filter_arr,

    is_price_custom = false,
    price_custom_1 = 0,
    price_custom_2 = 0,
}) {
    const search_obj = {};

    filter_arr.forEach((filter_obj) => {
        filter_obj.item_arr.forEach((item) => {
            if (!item.checked) {
                return;
            }

            if (search_obj[filter_obj.name]) {
                search_obj[filter_obj.name].push(item.filter_key);
            } else {
                search_obj[filter_obj.name] = [item.filter_key];
            }
        });
    });

    if (is_price_custom) {
        search_obj['price_custom'] = `${price_custom_1}-${price_custom_2}`;
    }

    return search_obj;
}
