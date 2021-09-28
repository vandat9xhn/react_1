//
export function parseCompareDevices(
    compare_devices_str = localStorage.compare_devices_str
) {
    const compare_device_arr = [];

    if (!compare_devices_str) {
        return [];
    }

    for (const device_str of compare_devices_str.split(';')) {
        const [id, name, img] = device_str.split(',');

        compare_device_arr.push({
            id: +id,
            name: name,
            img: img,
        });
    }

    return compare_device_arr;
}

//
export function stringifyCompareDevices(
    compare_device_arr = [] || [{ id: 0, name: '', img: '' }]
) {
    const compare_devices_str = compare_device_arr
        .map((item) => {
            return `${item.id},${item.name},${item.img}`
        })
        .join(';');

    return compare_devices_str;
}
