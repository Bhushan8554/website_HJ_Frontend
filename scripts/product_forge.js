import {navbar,footer,productFun,whyhotrajFun,LearnFun,companyho} from "../components/navbar.js"







document.querySelector('#navbar').innerHTML=navbar();
document.querySelector('#learning').addEventListener("click",LearnFun);
document.querySelector('#product').addEventListener("click",productFun);
document.querySelector('#whyhotraj').addEventListener("click",whyhotrajFun);
document.querySelector('#company').addEventListener("click",companyho);
document.querySelector('#footer').innerHTML=footer();

