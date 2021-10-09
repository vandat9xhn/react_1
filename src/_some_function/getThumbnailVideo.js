//
export function getThumbnailVideo({
    video_src = '',
    c_time_arr = [0],
    callback = (thumbnail_arr = ['']) => {},
}) {
    const thumbnail_arr = [];
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let seeked = false;

    video.src = video_src;
    video.preload = 'metadata';

    const waitToSeeked = () =>
        new Promise((res) => {
            const interval = setInterval(() => {
                if (seeked) {
                    seeked = false;
                    clearInterval(interval);
                    res();
                }
            }, 50);
        });

    video.onloadedmetadata = async () => {
        for (let i in c_time_arr) {
            video.currentTime = c_time_arr[i];

            await waitToSeeked();

            if (i == c_time_arr.length - 1) {
                callback(thumbnail_arr);
                video.remove();
                canvas.remove();
            }
        }
    };

    video.onseeked = () => {
        ctx.drawImage(video, 0, 0);
        thumbnail_arr.push(canvas.toDataURL('image/jpeg', 0.75));
        seeked = true;
    };
}
