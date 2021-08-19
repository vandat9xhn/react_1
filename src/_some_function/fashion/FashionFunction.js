import { UnitNumber } from '../UnitNumber';
import UnitTime from '../UnitTime';

//
export function changeOwnerInfo(owner_info) {
    owner_info.forEach((item) => {
        if (item.title == 'Time joined') {
            item.value = UnitTime(
                new Date().getTime() - new Date(item.value).getTime()
            );
        } else if (item.title == 'Reply time') {
            item.value = UnitTime(
                new Date().getTime() - new Date(item.value).getTime(),
                'For 1 min'
            );

            return;
        } else if (item.title == 'Follow') {
            item.value = UnitNumber(item.value);

            return;
        }
    });
}
