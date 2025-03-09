
const images = [
    "https://media.istockphoto.com/id/944812540/photo/mountain-landscape-ponta-delgada-island-azores.jpg?s=612x612&w=0&k=20&c=mbS8X4gtJki3gGDjfC0sG3rsz7D0nls53a0b4OPXLnE=",
    "https://t4.ftcdn.net/jpg/01/84/68/91/240_F_184689163_SQV3Qb86qcPKHIaLjRzVz7XOmjovEzyX.jpg",
    "https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=",
    "https://t3.ftcdn.net/jpg/01/25/89/88/240_F_125898822_j4n2We3BIvgplgdv6j36FjI8FNI9PnIy.jpg",
    "https://t3.ftcdn.net/jpg/01/84/20/58/240_F_184205846_wR34GtVxyXyeBW8rjDz8DXcWTblIMMq9.jpg",
    "https://t4.ftcdn.net/jpg/02/07/90/09/240_F_207900961_BItHda4F1k06szOs7w8rEX3s3OZ4nDro.jpg",

];

let currentIndex = 0; 

const sliderImage = document.getElementById("slider-image");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateImage();
}

updateImage();
