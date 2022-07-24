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



  


  
  let array_2=[ `
<div>
<div>
<p>FROM PRODUCT DESIGNERS</p>
<h2>Stop guessing and design with confidence</h2>
<p>Inform your next designs with insight into users' habits, behaviors, frustrations, and needs. With users at the center of your design, your creations are guaranteed to resonate.</p>
</div>
<div>
<img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2F67pWO2L9b6mDPbZ6zRKuMF%2Fef425e1c05ba7d4b3e2041788d875ea6%2Ftech-smith-Testimonial.png&w=1920&q=75" alt="">
</div>
<div>
<p>"That's why we come back to Hotjar regularly – to validate designs and make sure we're on track. That means we're making fewer assumptions."</p>
<h4>Conan Heiselt</h4>
<p>UX Designer, Techsmith</p>
</div>
</div>`,`
<div>
<div>
<p>FROM PRODUCT DESIGNERS</p>
<h2>Discover opportunities to improve the UX</h2>
<p>See the product experience through your users' eyes to get an unbiased view of your designs. Tweak your work with real and reliable user feedback.</p>
</div>
<div>
<img src="https://images.ctfassets.net/lh3zuq09vnm2/3QNQU0GA440ygxL7XVZDnd/319f890e2a09c25e05f2de9f3ff8dfaa/Razorpay-Testimonial.svg" alt="">
</div>
<div>
<p>"Hotjar helped us understand all the different ways people used our products – helping us optimize our designs."</p>
<h4>Saurabh Soni</h4>
<p>Product Designer, Razorpay</p>
</div>
</div>`,`
<div>
<div>
<p>FROM PRODUCT DESIGNERS</p>
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
  