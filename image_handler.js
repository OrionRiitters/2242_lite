class ImageHandler {
    // Finds img element using its id, then renders it to canvas.
    static renderImage(id, x, y) {
        let img = document.getElementById('background');
        ctx.drawImage(img, x, y);
    }

}
