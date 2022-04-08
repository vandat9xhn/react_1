import { loadFiles } from 'react-commons-ts';

//
export async function loadFile(files, vid_pic_key = 'vid_pic') {
    const data = await loadFiles({ files: files });

    return {
        files: data.map((item) => item.file),
        vid_pics: data.map((item) => ({
            [vid_pic_key]: item.url,
            type: item.file.type,
        })),
    };
}
