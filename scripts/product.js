// scrooll function
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

//   end///////

 
// div close open event start

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