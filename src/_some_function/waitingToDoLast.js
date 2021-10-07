//
export function waitingToDoLast({
    ref_interval = { current: null },
    time = 200,
    callback = () => {},
}) {
    clearTimeout(ref_interval.current);

    ref_interval.current = setTimeout(() => {
        clearTimeout(ref_interval.current);

        callback();
    }, time);
}
