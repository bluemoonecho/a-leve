

setTimeout(function () {
  document.getElementById('intro-leve').play()
}, 3000);


setTimeout(function () {
  document.getElementById('open').style.display='none';
}, 7200);



// Opening page timeout



/// Slick Carousell

$(document).ready(function(){

  $('.slick-show').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  })

  $('.slick-show').slickLightbox({
    src: 'src',
    itemSelector: '.selector img'
  });

});


$(document).scroll(function(){
  
  if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
    $('#seta-index').hide();
} else {
  $('#seta-index').show();
}

});


// POP UP WINDOW !!!
$(window).load(function () {
  $(".trigger_johny_hooker").click(function(){
     $('.hover_johny_hooker').show();
  });
  $('.hover_johny_hooker').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_johny_hooker').hide();
  });
});


$(window).load(function () {
  $(".trigger_iza").click(function(){
     $('.hover_iza').show();
  });
  $('.hover_iza').click(function(){
      $('.hover_iza').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_iza').hide();
  });
});



$(window).load(function () {
  $(".trigger_leve").click(function(){
     $('.hover_leve').show();
  });
  $('.hover_leve').click(function(){
      $('.hover_leve').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_leve').hide();
  });
});



function playMar() {
  var mar = document.getElementById("mar");
  mar.play();
}


function playGol() {
  var gol= document.getElementById("gol");
  gol.play();
}

function mute() {
  var vid = document.getElementById("index-open-Video");
  vid.muted = !vid.muted;
  // vid.muted = true;

  var icon = document.getElementById("sound-icon");
  if (vid.muted){
    icon.src='images/semSOM.png'
  }else {
    icon.src='images/SOM.png'
  }

  }
 






$(window).load(function () {

  var myVideo = document.getElementById('index-open-Video');
  if (typeof myVideo.loop == 'boolean') { // loop supported
    myVideo.loop = true;
  } else { // loop property not supported
    myVideo.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  //...
  setTimeout(function () {
  myVideo.play();
}, 9000);

  })

 



$(window).load(function () {

  var myVideo = document.getElementById('indexVideo');
  if (typeof myVideo.loop == 'boolean') { // loop supported
    myVideo.loop = true;
  } else { // loop property not supported
    myVideo.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  //...
  myVideo.play();
  
  })

// setTimeout(function () {
//   document.getElementById('indexVideo').stop();
// }, 90000);

setTimeout(function () {
  document.getElementById('open-logo').style.display='none';
}, 6000);


// setTimeout(function () {
//   document.getElementById('open-end-logo').style.display='none';
// }, 6000);







// setTimeout(function () {
//   document.getElementById('intro-quote').style.display='none';
// }, 14000);


var vid = document.getElementById("sound");
vid.muted = true;





var hovering = function(){
  $("hamburger").show("new-nav", { direction: "right" }, 1000);
};

var leaving = function(){
  $("hamburger").hide("new-nav", { direction: "left" }, 1000);
};
$("#hamburger").hover(hovering, leaving);


// document.querySelector('.hide-item')
// .addEventListener('click', () => alert('hidden item still triggers events'));

function mobileNav(){
  var x = document.getElementById("main-mobile");
  if( (x.classList.contains('addMargin')) || (x.classList.contains('addMarginExtra'))){
    (x.classList.remove('addMargin')) && (x.classList.remove('addMarginExtra'));
  } else {
    x.classList.add('addMargin')
  }
}

function mobileExtraNav(){
  var v = document.getElementById("main-mobile");
  if( v.classList.contains('addMarginExtra')){
    v.classList.remove('addMarginExtra');
  } else {
    v.classList.add('addMarginExtra')
  }
}


// document.onscroll = function() {
 
// }



// $('#vid').hide();

// $('#vid').on('ended',function(){ 
// $('#vid').hide();
// });





// $('video').on('ended',function(){ $(this).hide(); });

//change background color 

// setInterval(
//   function () {
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#"+randomColor;
//   },1000);

// Opening nav on hover timeout



// /* Set the width of the side navigation to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


//   /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "70px";
//   }


// function mobileNav(){
//   document.getElementById("main").style.marginTop = "70px";
// }

// function closemobileNav() {
//   document.getElementById("main").style.width = "0";
// }

// let w = window.matchMedia("(max-width: 767px)")

// if(w.matches){
// function activateMobile(){
//       var x = document.getElementById("main");
//       if (x.style.marginTop === "400px") {
//         x.style.marginTop = "0px";
//       } else {
//         x.style.marginTop = "400px";
//       }
//     }


// $(window).resize(function() {
//   if ($(window).width() > 767){

//   }
// });
// activateMobile();


// function activateMobile(){
    
//   var x = document.getElementById("main-mobile");

//   if (x.style.marginTop === "400px" ){
//     x.style.marginTop = "1px";
//   } else {
//     x.style.marginTop = "400px";
// }
// }



// $('.slide-gil').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });


// Create a media condition that targets viewports at least 768px wide

  // function activateMobile(){
    
  //     var x = document.getElementById("main-mobile");

  //     if (x.style.marginTop === "400px" ){
  //       x.style.marginTop = "1px";
  //     } else {
  //       x.style.marginTop = "400px";
  //     }
  //   }



    // function clickHandler() {
    //   alert("media worked");
    // }
    
    // function myFunction(x) {
    //   if (x.matches) { // If media query matches
    //     document.getElementById("resources").addEventListener("click", activateMobile)
    //   } else {
    //     document.getElementById("resources").removeEventListener("click", activateMobile)
    //   }
    // }
    
    // var x = window.matchMedia("(max-width: 979px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes


// function mobileNav() {
//   var x = document.getElementById("main");
//   if (x.style.marginTop === "400px") {
//     x.style.marginTop = "0px";
//   } else {
//     x.style.marginTop = "400px";
//   }
// }



// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }


//   $.noConflict();
// jQuery(document).ready(function($) {
//   $('.menu-toggle').on('click', function() {
//     $('ul').slideToggle();
//     $(this).toggleClass('open');
//   });
// })

