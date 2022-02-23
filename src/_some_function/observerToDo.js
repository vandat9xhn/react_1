import { observeToDo as _observeToDo } from 'react-observer-ts';

//

function observeToDo({
    elm,
    when_over = false,
    callback = () => {},

    root = null,
    rootMargin = `500px`,
    threshold = 0,
}) {
    _observeToDo({
        elm: elm,
        when_over: when_over,
        callback: callback,
        options: {
            root: root,
            rootMargin: rootMargin,
            threshold: threshold,
        },
    });
}

export default observeToDo;
