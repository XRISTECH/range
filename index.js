// Scroll To Top Javascript

const scrollBtn = document.querySelector('#scrol-top');
window.addEventListener('scroll', displayScrolBtn);
window.addEventListener('load', displayScrolBtn);

function displayScrolBtn(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        scrollBtn.style.display = "flex";
    }else{
        scrollBtn.style.display = 'none';
    }

}

scrollBtn.addEventListener('click', function(){
    window.scrollTo(0,0);
})