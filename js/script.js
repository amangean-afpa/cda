const likeImg = "img/thumb-fill.svg";
const unlikeImg = "img/thumb-outline.svg";

function toggleLike(id) {
    const img = document.getElementById(id);
    const isLike = img.src.includes(likeImg);
    img.src = !isLike ? likeImg : unlikeImg;
}
