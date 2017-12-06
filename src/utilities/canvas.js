const canvas = {
    clickedTransparent: function (event) {
        const canvas = document.getElementsByTagName("canvas")[0];
        const ctx = canvas.getContext("2d");
        const x = event.evt.offsetX * canvas.width / 1080;
        const y = event.evt.offsetY * canvas.height / 1080;
        const alpha = ctx.getImageData(x, y, 1, 1).data[3];

        return alpha === 0
    },
    calculateCanvasPercentage: function (percent) {
        return percent * 1080 / 100;
    }
};

export default canvas;
