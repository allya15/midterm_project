$(() => {
  $.ajax({
    method:"GET",
    url:"/api/profile"
  }).done((users) => {
    console.log("This is my user: ", users);
    for (user of users) {
      $("<h1 class='display-4 pt-1'>").text(`Welcome ${user.firstName} ${user.lastName}`).appendTo($(".profile-greeting"))
    }
  })
})
