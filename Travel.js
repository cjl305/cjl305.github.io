
$(document).ready(function(){
	$(".restart").click( function(){
	location.reload();
})
})

$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().remove();
  })

})

