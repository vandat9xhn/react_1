/**
 * get width to transform and max width transform base on row and item
 */
function getWidthTransform(class_row='', class_item='', total_item=0){
    const width_row = document.getElementsByClassName(class_row)[0].getBoundingClientRect().width
    const width_item = document.getElementsByClassName(class_item)[0].getBoundingClientRect().width
    const width_total = width_item * total_item
    //
    const width_transform = Math.floor(width_row / width_item) * width_item
    const max_width_transform = width_total - width_row
    // 
    return [width_transform, max_width_transform]
}

export default getWidthTransform;