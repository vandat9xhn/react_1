import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { openStoryHomePc } from '../pc/home/ScreenStoryHomePc';
import { openScreenStoryItemMobile } from '../mobile/item/ScreenStoryItemMobile';
import { openScreenStoryMenuMobile } from '../mobile/menu/ScreenStoryMenuMobile';

import { openScreenCreateStoryMb } from '../mobile/create/ScreenStoryCreateMb';
import { openScreenCreateStoryPc } from '../pc/create/ScreenStoryCreatePc';

//
export const openScreenStoryCreate = IS_MOBILE
    ? openScreenCreateStoryMb
    : openScreenCreateStoryPc;

//
export const openScreenStoryMenu = IS_MOBILE
    ? openScreenStoryMenuMobile
    : openStoryHomePc;

//
export const openScreenStoryItem = IS_MOBILE
    ? openScreenStoryItemMobile
    : () => null;
