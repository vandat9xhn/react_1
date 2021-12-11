import { getRandomFromArr } from './getRandomFromArr';

//
export function getRandomPageType() {
    return getRandomFromArr([
        'supermarket',
        'Just for fun',
        'Community',
        'School/university',
    ]);
}
