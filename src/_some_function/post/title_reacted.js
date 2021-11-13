import { UnitNumber } from '../UnitNumber';

//
export function getPostTitleReacted({ reacted_count, user_reacted_ix }) {
    return reacted_count > 1
        ? user_reacted_ix >= 0
            ? `You and ${UnitNumber(reacted_count - 1)} others`
            : `${UnitNumber(reacted_count)}`
        : user_reacted_ix >= 0
        ? `You`
        : `${UnitNumber(reacted_count)}`;
}
