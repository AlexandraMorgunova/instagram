
//4post
 const text1=document.querySelector('.li');
const like=document.querySelector('.li1');
like.addEventListener('click',()=>{
    like.classList.toggle('like_img')
    if(like.classList.contains("like_img")){
text1.innerHTML='24 отметок "Нравится"'
    }
    else{
        text1.innerHTML="23 отметок 'Нравится'"
    }
})
//3post
const text2=document.querySelector('.tex');
const like2=document.querySelector('.lii');
like2.addEventListener('click',()=>{
    like2.classList.toggle('like_img')
    if(like2.classList.contains("like_img")){
text2.innerHTML='24 отметок "Нравится"'
    }
    else{
        text2.innerHTML="23 отметок 'Нравится'"
    }
})

//2 post
const text3=document.querySelector('.tex3');
const like3=document.querySelector('.li3');
like3.addEventListener('click',()=>{
    like3.classList.toggle('like_img')
    if(like3.classList.contains("like_img")){
text3.innerHTML='24 отметок "Нравится"'
    }
    else{
        text3.innerHTML='23 отметок "Нравится"'
    }
})
//1 post

const text4=document.querySelector('.tex4');
const like4=document.querySelector('.li4');
like4.addEventListener('click',()=>{
    like4.classList.toggle('like_img')
    if(like4.classList.contains("like_img")){
text4.innerHTML='24 отметок "Нравится"'
    }
    else{
        text4.innerHTML="23 отметок 'Нравится'"
    }
})