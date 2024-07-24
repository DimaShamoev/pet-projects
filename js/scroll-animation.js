// window.onload = function () {
//     let html = document.documentElement;
//     let canvas = document.querySelector(".anim-canvas");
//     let context = canvas.getContext('2d');

//     const curentFrame = index => (
//         `../../img/frames/frame_${index.toString().padStart(4, '0')}.png`
//     );

//     let frameCnt = 1135;
//     let img = new Image();

//     img.onload = function () {
//         canvas.height = img.height;
//         canvas.width = img.width;
//         context.drawImage(img, 0, 0);
//     };

//     img.src = curentFrame(1);

//     const updateImage = index => {
//         img.src = curentFrame(index);
//     };

//     window.addEventListener("scroll", () => {
//         let scrollTop = html.scrollTop;
//         let maxScroll = html.scrollHeight - window.innerHeight;
//         let scrollFraction = scrollTop / maxScroll;
//         let frameIndex = Math.min(frameCnt - 1, Math.floor(scrollFraction * frameCnt));

//         requestAnimationFrame(() => updateImage(frameIndex + 1));
//     });
// };


function preloadImages(frameCnt, callback) {
    let images = [];
    let loadedImages = 0;

    for (let i = 1; i <= frameCnt; i++) {
        let img = new Image();
        img.src = curentFrame(i);
        img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCnt) {
                callback(images);
            }
        };
        images.push(img);
    }
}

const curentFrame = index => (
    `../../img/frames/frame_${index.toString().padStart(4, '0')}.png`
);

preloadImages(1135, (images) => {
    // Animation code here
});

