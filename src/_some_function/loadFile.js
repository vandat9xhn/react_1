//
export function loadFile(files, vid_pic_key = 'vid_pic') {
    return new Promise((res) => {
        const vid_pics = [];
        const new_files = [];
        let i = 1;
        const file_count = files.length;

        for (const file of files) {
            const reader = new FileReader();

            // event load
            reader.onload = () => {
                vid_pics.push({
                    [vid_pic_key]: reader.result,
                    type: file.type,
                });

                new_files.push(file);
            };

            // event loadend
            if (i == file_count) {
                reader.onloadend = () => {
                    res({ files: new_files, vid_pics: vid_pics });
                };
            } else {
                i += 1;
            }

            // read file
            reader.readAsDataURL(file);
        }
    });
}
