let index = 0;
let images = [];
let time = 1000;

// Image List
images[0] = 'img/slider/photo-1.jpg';
images[1] = 'img/slider/photo-2.jpg';
images[2] = 'img/slider/photo-3.jpg';
document.slide.src = images[0];

function changeImageRight() {
    document.slide.src = images[index];

    if (index < images.length - 1) {
        index++;
    } else {
        index = 0;
    }

    // setTimeout("changeImage()", time);
}

function changeImageLeft() {
    document.slide.src = images[index];

    if (index > 0) {
        index--;
    } else {
        index = 2;
    }

    // setTimeout("changeImage()", time);
}

document.getElementById('js-right').addEventListener('click', changeImageRight);
document.getElementById('js-left').addEventListener('click', changeImageLeft);

