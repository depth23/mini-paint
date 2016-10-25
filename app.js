
$(document).ready(function() {
    
    var color = "white";
    
    $("#white").addClass("border");
    
    $('#red').on("click", function() {
      color = "red";
      $("#blue").removeClass("border");
      $("#green").removeClass("border");
      $("#yellow").removeClass("border");
      $("#white").removeClass("border");
      $("#erase").removeClass("border");
      $(this).addClass("border");
    });

    $('#blue').on('click', function() {
      color = 'blue';
      $("#green").removeClass("border");
      $("#yellow").removeClass("border");
      $("#white").removeClass("border");
      $("#red").removeClass("border");
      $("#erase").removeClass("border");
      $(this).addClass("border");
    });

    $('#green').on('click', function() {
      color = 'green';
      $("#blue").removeClass("border");
      $("#yellow").removeClass("border");
      $("#white").removeClass("border");
      $("#red").removeClass("border");
      $("#erase").removeClass("border");
      $(this).addClass("border");
    });

    $('#yellow').on('click', function() {
      color = 'yellow';
      $("#blue").removeClass("border");
      $("#green").removeClass("border");
      $("#white").removeClass("border");
      $("#red").removeClass("border");
      $("#erase").removeClass("border");
      $(this).addClass("border");
    });

    $('#white').on('click', function() {
      color = 'white';
      $("#blue").removeClass("border");
      $("#green").removeClass("border");
      $("#yellow").removeClass("border");
      $("#red").removeClass("border");
      $("#erase").removeClass("border");
      $(this).addClass("border");
    });
    
    $('#erase').on('click', function() {
      color = 'erase';
      $("#blue").removeClass("border");
      $("#green").removeClass("border");
      $("#yellow").removeClass("border");
      $("#red").removeClass("border");
      $("#white").removeClass("border");
      $(this).addClass("border");
    });
    
    var isDown = false;
    $('.box').on('mousedown', function() {
      isDown = true;
    }).on('mouseup', function() {
      isDown = false;
    });
  
    $('.box').on('mouseover', function() {
      if(isDown) {
        $(this).addClass(color);
      }
    });
  
    var colors = 'white red blue green yellow';

    $('.box').on('dblclick', function() {
      $(this).removeClass(colors);
    });

    $('#reset').on('click', function() {
      $('.box').removeClass(colors);
    });
    
});