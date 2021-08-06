import StoryCreatePc from "../../../../../story_fb/create/pc/_main/StoryCreatePc";

//
export function openScreenCreateStoryPc({
    openScreenFloor,
    show_fav
}) {
    openScreenFloor({
        FloorComponent: StoryCreatePc,
        show_fav: show_fav,
    });
}
