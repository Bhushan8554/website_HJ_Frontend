let divsOfEtra=document.querySelectorAll("#videoDiv>div>.showextra");

divsOfEtra.forEach(el=>{
    el.addEventListener("click",function(){
        changeContent(event);
    })
})

let changeContent=(event)=>{
    let x=document.querySelectorAll("#videoDiv>div>.showextra>p");
    x.forEach(el=>{
        el.style.display="none"
    })
    console.log(event)
    event.target.lastElementChild.style.display="block"
};