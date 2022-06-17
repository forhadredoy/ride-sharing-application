var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseover', animateButton, false);
  }
  //input
    // jquery transit is used to handle the animation
    $('input').focusin(function() {
      $('label').transition({x:'80px'},500,'ease').next()
      .transition({x:'5px'},500, 'ease');
//setTimeout needed for Chrome, for some reson there is no animation from left to right, the pen is immediately present. Slight delay to adding the animation class fixes it
       setTimeout(function(){
      $('label').next().addClass('move-pen');
      },100);
  
  });
    
    $('input').focusout(function() {
        $('label').transition({x:'0px'},500,'ease').next()
         .transition({x:'-100px'},500, 'ease').removeClass('move-pen');
    });