// main.js//
//이미지 슬라이더
$(function(){
    
let num = 1;
let slider = setInterval(function(){
    if (num > 3) {num = 0 ; }
    $('.slider > img').removeClass('show');
    $('.slider > img').eq(num).addClass('show');
    console.log(num)
    num++;
},5000);
});