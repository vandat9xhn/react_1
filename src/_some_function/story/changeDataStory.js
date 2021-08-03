//
export function changeDataStory(data) {
    data.map((item) => {
        item.active_step =
            item.count_new == 0 ? 0 : item.count - item.count_new;
        item.active_item_ix = 0;
        item.has_fetched = false;

        return item;
    });
}