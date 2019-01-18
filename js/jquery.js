$(document).ready(function(){

// ELEMENT DANS VIEWPORT

// $.fn.isInViewport = function() {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();

//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementBottom > viewportTop && elementTop < viewportBottom;
// };

$('#test').on('inview', function (event, isInView) {
        if (isInView) {
            $('span').toggleClass('letter');
            $('#test').toggleClass('ml16');
            
            // animetext();
        } 
    });

// $(window).load(animetext(){
//   topInView($('.ml16'))
// });
   // ANIMATION H2
   // function animeText(){
  $('.ml16').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});


anime.timeline({loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 4500,
    delay: function(el, i) {
      return 30 * i;
    }
  });
// }


// FOND BOUTTON

document.querySelector('.button').onmousemove = (e) => {

	var rect = e.target.getBoundingClientRect(); 
	const x = e.clientX - rect.left; 
	const y = e.clientY - rect.top;

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
	
}



});