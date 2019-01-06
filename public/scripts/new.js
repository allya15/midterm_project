$(document).ready(function() {




  const submitHandler = function(event) {
    event.preventDefault();
    $.ajax({data: $(this).serialize(),
      url:'/',
      method:"POST",
      success: function() {
        loadTweets()
    }})
  }



  const newpage = $('#AddNewPage')




})