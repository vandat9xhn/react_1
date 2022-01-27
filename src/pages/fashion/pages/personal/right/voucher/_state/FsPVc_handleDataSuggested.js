import { getRandomImg } from '../../../../../../../_default/_common/default_image';

//
export function FsPVc_handleDataSuggested({
    data,
    setSuggestedState = () => {},
}) {
    setSuggestedState({
        suggested_arr: [
            {
                id: 1,
                img: getRandomImg(),
                name: 'adsada asd asdas',
                new_price: 100000,
                discount_str: '5k',
                min_spend: 150000,
                is_mall: false,
                is_like: true,
                is_plus: false,
            },
            {
                id: 2,
                img: getRandomImg(),
                name: 'adsada asd h gh sd',
                new_price: 100000,
                discount_str: '20%',
                min_spend: 100000,
                is_mall: true,
                is_like: false,
                is_plus: false,
            },
            {
                id: 3,
                img: getRandomImg(),
                name: 'lasdad sad asdoa sdka',
                new_price: 100000,
                discount_str: '10k',
                min_spend: 250000,
                is_mall: false,
                is_like: true,
                is_plus: true,
            },
        ],
        has_fetch_suggested: true,
    });
}
