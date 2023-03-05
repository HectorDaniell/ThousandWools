const fulImgBox= document.getElementById("ful-img-box");
const fulImg= document.getElementById("ful-img");
const btnClose=document.getElementById("btncls");

btnClose.addEventListener("click",closeImg);

function closeImg(){
    fulImgBox.style.display = "none";
}

function openImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}
