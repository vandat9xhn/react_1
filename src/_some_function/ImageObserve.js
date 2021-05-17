/**
 * observe images_videos(HTML ELEMENT) then remove attr_remove(attribute like [data-source])
*/
const objObserver = (images_videos=NodeList || HTMLCollection, attr_remove='') => {
    if (images_videos.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute(attr_remove);
                    observer.unobserve(entry.target);
                }
            });
        });
        images_videos.forEach((image) => observer.observe(image));
    }
};

export default objObserver;

// 
export const observerVidPic = (image_video=HTMLPictureElement || HTMLVideoElement, attr_remove='') => {
    if (image_video) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute(attr_remove);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(image_video)
    }
};