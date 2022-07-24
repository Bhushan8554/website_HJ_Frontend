
     let btn2=document.querySelector('#btn2');
     let btn1=document.querySelector('#btn1');
     btn2.addEventListener('click',()=>{
        btn2.setAttribute('class','boxs');
        btn1.removeAttribute('class','boxs') 
        let changec=document.querySelector('#changeC');
         changec.innerText='$ Pay yearly and get 20% off';
         let p=document.querySelector('#f2');
         p.innerText='142';
     });

     btn1.addEventListener('click',()=>{
        btn2.removeAttribute('class','boxs');
        btn1.setAttribute('class','boxs') 
        let p=document.querySelector('#f2');
         p.innerText='113';
         let changec=document.querySelector('#changeC');
         changec.innerText='✔ 20% yearly discount applied';
     });