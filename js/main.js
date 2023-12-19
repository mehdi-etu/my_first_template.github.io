const curser = document.querySelector(".mouse");



const mouse_track = (e) => {
    
    const posx = e.pageX;
    const posy = e.pageY;


    curser.style.transform=`translate3d(${posx-75}px, ${posy-75}px, 0)  rotate(160deg)`;

}


document.addEventListener("mousemove", mouse_track);
document.addEventListener("mouseover", mouse_track);
