import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { openScreenStoryItemMobile } from '../mobile/item/ScreenStoryItemMobile';
import { openScreenStoryMenuMobile } from '../mobile/menu/ScreenStoryMenuMobile';

import { openScreenCreateStoryPc } from '../pc/create/ScreenStoryCreate';
import { openStoryHomePc } from '../pc/home/ScreenStoryHomePc';

//
export const openScreenStoryCreate = IS_MOBILE
    ? openScreenCreateStoryPc
    : openScreenCreateStoryPc;

//
export const openScreenStoryMenu = IS_MOBILE
    ? openScreenStoryMenuMobile
    : openStoryHomePc;

//
export const openScreenStoryItem = IS_MOBILE
    ? openScreenStoryItemMobile
    : () => null;
