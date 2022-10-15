

const block = document.querySelector(".block");


let position = 0;
let topPosition = 0;

 const move = ()=> {
    if(position <= 460 && topPosition == 0){
        position+=16
        block.style.left = `${position}px` ;
        setTimeout(move, 60);
    }else if(position>=460 && topPosition <= 460){
            topPosition+=16
            block.style.top = `${topPosition}px` ;
            setTimeout(move, 60);
    }else if(position >=16 && topPosition  >= 460 ){
        position-=16
        block.style.left = `${position}px` ;
        setTimeout(move, 60);
    }else if(position <= 16 && topPosition >= 0){
        topPosition-=16
        block.style.top = `${topPosition}px` ;
        setTimeout(move, 60);
}
 };

 move();