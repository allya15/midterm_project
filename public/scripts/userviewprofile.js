$(() => {
  $.ajax({
    method:"GET",
    url:"/api/userviewprofile"
  }).done((users) => {
    for (user of users) {
      $("#profile-button").append(`<form action="/${user.firstName}-${user.lastName}" method="get">
        <button class="btn nav-link active btn-lg" type="submit"><i class="fas fa-user"></i> | Profile</button>
      </form>`)
    }
  })
})
