//
export function loadFile(files, vid_pic_key='vid_pic') {
    return new Promise((res) => {
        const vid_pics = [];
        let i = 1;

        for (const file of files) {
            const reader = new FileReader();
            reader.onload = () => {
                vid_pics.push({
                    [vid_pic_key]: reader.result,
                    type: file.type,
                });
            };
            reader.readAsDataURL(file);
            //
            if (i == files.length) {
                setTimeout(
                    () => {
                        res({ files: files, vid_pics: vid_pics });
                    },
                    i <= 5 ? 500 : i * 100
                );
            } else {
                i += 1;
            }
        }
    });
}
