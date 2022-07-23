import {navbar,footer,productFun,whyhotrajFun,LearnFun,companyho} from "../components/navbar.js"







document.querySelector('#navbar').innerHTML=navbar();
document.querySelector('#learning').addEventListener("click",LearnFun);
document.querySelector('#product').addEventListener("click",productFun);
document.querySelector('#whyhotraj').addEventListener("click",whyhotrajFun);
document.querySelector('#company').addEventListener("click",companyho);
document.querySelector('#footer').innerHTML=footer();







let divsOfEtra=document.querySelectorAll("#videoDiv>div>.showextra");

let videoarr=[`https://videos.ctfassets.net/lh3zuq09vnm2/2q1Ma50UnBKlnPbbRReO2j/f50946203d4a6bb26285a80a7275e571/heatmap-scrolling.mp4`,
`https://videos.ctfassets.net/lh3zuq09vnm2/EFyFOljkHxHzS5rpMmvOS/f56cdc3fc39d40df443e3a76b980356b/recordings-rage_clicks-u_turns.mp4`,
`https://videos.ctfassets.net/lh3zuq09vnm2/4qQy2K5TTJA4TvrqtAvptj/826fa8d309ce2368ea14756a727706a3/incoming_feedback_1.mp4`,
`https://videos.ctfassets.net/lh3zuq09vnm2/36VzBCqGyWUrbzTHz03Al8/5e3ef017e35949609e09c3ed73e76d08/survey-add_question.mp4`]

let video=document.querySelector("#videoDiv>video");
video.src=videoarr[0];

divsOfEtra.forEach((el,i)=>{
    el.addEventListener("click",function(){
        changeContent(event,i);
    })
})
document.querySelector("#videoDiv>div>.showextra>p").style.display="block";

let changeContent=(event,i)=>{
    let x=document.querySelectorAll("#videoDiv>div>.showextra>p");
    x.forEach(el=>{
        el.style.display="none"
    });
    console.log(event)
    event.target.lastElementChild.style.display="block";
    video.src=null;
    video.src=videoarr[i];
};




$(function() {
    // vars for clients list carousel
    // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
    var $clientcarousel = $('#clients-list');
    var clients = $clientcarousel.children().length;
    var clientwidth = (clients * 220); // 140px width for each client item 
    $clientcarousel.css('width', clientwidth);
  
    var rotating = true;
    var clientspeed = 0;
    var seeclients = setInterval(rotateClients, clientspeed);
  
    $(document).on({
      mouseenter: function() {
        rotating = true; // turn off rotation when hovering
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#clients');
  
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clients-list li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clients-list li:last').after($first);
        });
      }
    }
  });



  let array=[ `
<div>
<div>
<h2>Reduce assumptions and validate ideas</h2>
<p>Understand how users truly behave in your product with unbiased reliable data. Stop guessing and build product features that are guaranteed to help your users.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2Fw3hbtrO9OGIocIgxUlqik%2F7eb72ab575f73d3c730fdc456d8ff8c1%2Fhussle-testimonial.jpg&w=1920&q=75" alt="">
</div>
<div>
<p>"Rather than guess what's needed, we watch session recordings to build what's right for the users."</p>
<h4>Luke Calton</h4>
<p>Product Lead, Hussle</p>
</div>
</div>`,`
<div>
<div>

<h2>Spot opportunities to hit business goals</h2>
<p>Prioritize your roadmap with eye-opening insights about your users' experience. Grow usage and keep customers hooked with the new features that resonate.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/6PpTRzxkQSS6sr5JjRfFBm/61bec6d7551399d19cf1475d5dd1827c/Audiense-Testimonial.svg" alt="">
</div>
<div>
<p>"Hotjar helps us empathize with users and confirms that our work is having a positive impact."</p>
<h4>Juan Fernandez</h4>
<p>Head of Product, Audiense</p>
</div>
</div>`,`
<div>
<div>
<h2>Get buy-in for your next big idea</h2>
<p>Create a compelling case for what needs to be built, with real insights about your user's experience.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/6JLprXrTy2J5s97Z8dScFU/37270098c8da6559856b872945f7ffa8/JenniKayne-Testimonial.svg" alt="">
</div>
<div>
<p>"Hotjar is key in how I communicate product insight. It shows senior stakeholders what's really happening on the site."</p>
<h4>Heaven Schydlowsky</h4>
<p>Digital Product Manager, Jenni Kayne</p>
</div>
</div>`,`
<div>
<div>

<h2>Spot issues before it's too late</h2>
<p>Troubleshoot issues by seeing a user's negative experience through their eyes. Help your team understand the problem and prioritize fixes, fast.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/33zdTVTZ96FBSRTxS70f1K/791db9d6211e4f2b4c039491c8ef930d/intelliquip-Testimonial.svg" alt="">
</div>
<div>
<p>"We made a lot of corrections quickly. Without Hotjar I don't think we would have a clue what was going on."</p>
<h4>Jon Kern</h4>
<p>Strategic Products, Intelliquip</p>
</div>
</div>`]

var i=0;
document.querySelector("#divSliderFor").innerHTML=array[i];

function chanGeIndexplus(){
  
  i++;
  if(i>3){
    i=0;
  }
  document.querySelector("#divSliderFor").innerHTML=array[i];
}
function chanGeIndexminus(){
  console.log("bhushan")
  i--;
  if(i<0){
    i=3;
  }
  document.querySelector("#divSliderFor").innerHTML=array[i];
}

let ChangingTheDivFun=(i)=>{
  document.getElementById("divSliderFor").innerHTML=null;
  if(i>array.length-1){
    i=0;
  }
  if(i<0){
    i=array.length-1;
  }
  document.getElementById("divSliderFor").innerHTML=array[i];
};

  let btnForSliders=document.getElementById("arrwImg1");
  btnForSliders.addEventListener("click",chanGeIndexplus);
  let btnForSliderstwo=document.getElementById("arrwImg2");
  btnForSliderstwo.addEventListener("click",chanGeIndexminus);
  


  
  let array_2=[ `
<div>
<div>
<p>HITTING TARGETS WITH HOTJAR</p>
<h2>Increase conversion</h2>
<p>Andrew increased conversions on his site by 3x with insights from heatmaps and recordings.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/29ROcjdWY3DMuPKzanzlz/7da37de9b9903e0f65c4c7435168c0a2/Market-Materials-Testimonial.svg" alt="">
</div>
<div>
<p>“With Hotjar... our conversion rate went from 0.5% to 1.6% for visitors making a payment in just one month.”</p>
<h4>Andrew Haehn</h4>
<p>Operations Director, Materials Market</p>
</div>
</div>`,`
<div>
<div>
<p>HITTING TARGETS WITH HOTJAR</p>
<h2>Spot and fix bugs</h2>
<p>Luke spends just eight minutes a day watching Recordings and fixes one bug a week.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2Fw3hbtrO9OGIocIgxUlqik%2F7eb72ab575f73d3c730fdc456d8ff8c1%2Fhussle-testimonial.jpg&w=1920&q=75" alt="">
</div>
<div>
<p>"I open up Recordings to watch people using the new feature. Immediately I'll spot things I wasn't expecting."</p>
<h4>Luke Calton</h4>
<p>Product Lead, Hussle</p>
</div>
</div>`,`
<div>
<div>
<p>HITTING TARGETS WITH HOTJAR</p>
<h2>Validate ideas</h2>
<p>Brett doesn’t rely on gut instinct. He analyzes behavior from 7 million users to validate his ideas.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/3WplM3sWGRlc8odiAPRCUt/c99676a3ff5c023f078be2b5e3b630d9/reedCoUk-testimonials.svg" alt="">
</div>
<div>
<p>"Hotjar helps us understand our customers, their engagement, and their journey."</p>
<h4>Brett Orr</h4>
<p>Lead Product Owner, Reed</p>
</div>
</div>`]

var i_2=0;
document.querySelector("#divSliderFor-2").innerHTML=array_2[i_2];

function chanGeIndexplus_2(){
  
  i_2++;
  if(i_2>2){
    i_2=0;
  }
  document.querySelector("#divSliderFor-2").innerHTML=array_2[i_2];
}
function chanGeIndexminus_2(){
  console.log("bhushan")
  i_2--;
  if(i_2<0){
    i_2=2;
  }
  document.querySelector("#divSliderFor-2").innerHTML=array_2[i_2];
}

let ChangingTheDivFun_2=(i)=>{
  document.getElementById("divSliderFor-2").innerHTML=null;
  if(i_2>array_2.length-1){
    i_2=0;
  }
  if(i_2<0){
    i_2=array_2.length-1;
  }
  document.getElementById("divSliderFor-2").innerHTML=array_2[i_2];
};

  let btnForSliders_2=document.getElementById("arrwImg1-2");
  btnForSliders_2.addEventListener("click",chanGeIndexplus_2);
  let btnForSliderstwo_2=document.getElementById("arrwImg2-2");
  btnForSliderstwo_2.addEventListener("click",chanGeIndexminus_2);
  