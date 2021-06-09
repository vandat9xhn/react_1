//
export function makeAnimateNatureDrop(
    elm_nature,
    nature_length,
    callback = () => {}
) {
    try {
        for (let i = 0; i < nature_length; i++) {
            //
            const left_1 = Math.random() * 100;
            const left_2 = left_1 + (Math.random() * 2 - 1) * 10;
            const left_3 = left_2 + (Math.random() * 2 - 1) * 10;
            const left_4 = left_3 + (Math.random() * 2 - 1) * 10;

            setTimeout(() => {
                elm_nature.children[i].animate(
                    [
                        {
                            left: left_1 + '%',
                            top: '-5%',
                            opacity: 1,
                            transform: 'rotate(0deg)',
                        },
                        {
                            left: left_2 + '%',
                            top: '38%',
                            opacity: 0.8,
                            transform: 'rotate(360deg)',
                        },
                        {
                            left: left_3 + '%',
                            top: '71%',
                            opacity: 0.6,
                            transform: 'rotate(720deg)',
                        },
                        {
                            left: left_4 + '%',
                            top: '104%',
                            opacity: 0.4,
                            transform: 'rotate(1080deg)',
                        },
                    ],
                    {
                        duration: (Math.random() * 17 + 3) * 1000,
                        easing: Math.random() >= 0.5 ? 'linear' : 'ease-in-out',
                        delay: (Math.random() * 3 + i) * 1000,
                    }
                );

                callback(elm_nature.children[i], i);
            }, 50);
        }
    } catch (err) {}
}

//
export function startNatureDrop(
    num_arr = [1],
    intervals = { current: [] },
    makeNatureDrop = () => {}
) {
    setTimeout(() => {
        makeNatureDrop(0);
    }, 100);

    setTimeout(() => {
        makeNatureDrop(1);
    }, 5000);

    //
    setTimeout(() => {
        for (const i in num_arr) {
            const interval = setInterval(() => {
                intervals.current.push(interval);
                makeNatureDrop(i);
            }, 15000 + (i - 1) * 10000);
        }
    }, 100);
}
