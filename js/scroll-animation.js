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


window.onload = function () {
    let html = document.documentElement;
    let canvas = document.querySelector(".anim-canvas");
    let context = canvas.getContext('2d');

    const curentFrame = index => (
        `../../img/frames/frame_${index.toString().padStart(4, '0')}.png`
    );

    let frameCnt = 1135;
    let img = new Image();

    img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        context.drawImage(img, 0, 0);
    };

    img.src = curentFrame(1);

    const updateImage = index => {
        img.src = curentFrame(index);
    };

    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                let scrollTop = html.scrollTop;
                let maxScroll = html.scrollHeight - window.innerHeight;
                let scrollFraction = scrollTop / maxScroll;
                let frameIndex = Math.min(frameCnt - 1, Math.floor(scrollFraction * frameCnt));
                updateImage(frameIndex + 1);
                ticking = false;
            });
            ticking = true;
        }
    });
};
