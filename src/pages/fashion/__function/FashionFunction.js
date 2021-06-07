import { UnitNumber } from "../../../_some_function/UnitNumber";
import UnitTime from "../../../_some_function/UnitTime";

// 
export function changeOwnerInfo(owner_info) {
    owner_info.map((item) => {
        if (item.title == 'Time join') {
            item.value = UnitTime(
                new Date().getTime() - new Date(item.value).getTime()
            );

            return item;
        }

        if (item.title == 'Reply time') {
            item.value = UnitTime(
                new Date().getTime() - new Date(item.value).getTime()
            );

            return item;
        }

        if (item.title == 'Follow') {
            item.value = UnitNumber(item.value);

            return item;
        }
    });
}