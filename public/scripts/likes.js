$(document).ready(function(){
    $( ".button-like" ).on("click", function(e) {
      alert('You like this article!')
    })
    $.ajax({
      method: "GET",
      url: "/api/likes"
    }).done((result) => {
      $('<div>').text(result[0].count).appendTo('.like-count')
    })
  });
