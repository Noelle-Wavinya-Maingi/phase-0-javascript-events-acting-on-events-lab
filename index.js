// Your code here

let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    let leftValue = dodger.style.left.replace('px', '');
    let left = parseInt(leftValue, 10);

    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    let leftValue = dodger.style.left.replace('px', '');
    let left = parseInt(leftValue, 10);
    if(left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowRight') {
        moveDodgerRight()
    }
})

document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowLeft') {
        moveDodgerLeft()
    }
})

