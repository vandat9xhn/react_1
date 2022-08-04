// SCREEN

export const USE_APP_SCROLL = true;

//

export const HEADER_HEAD = IS_MOBILE ? 48 : 56;

//

export const IS_MOBILE =
    navigator.userAgent.toUpperCase().search("MOBILE") >= 0;

export const REG_ACCOUNT = /\/(login-form|registration-form|login-pic)/;

// CHAT

//
export const CHAT_INACTIVE_NUM = IS_MOBILE ? 2 : 4;

// STORY

export const ROTATE_RATIO = 100;

//
export const SCALE_PIC_RATIO = 25;

export const STORY_WIDTH_HEIGHT_RATIO = 0.55;

// SHOPEE

export const CLASS_PC_OR_MOBILE = IS_MOBILE ? "-mobile" : "-pc";

export const FS_SEARCH_DEL_WIDTH = 160;

export const ADDRESS_HEAD_ARR = IS_MOBILE
    ? ["Tỉnh", "Huyện", "Xã"]
    : ["Tỉnh/Thành phố", "Huyện/Quận", "Xã/Phường"];
