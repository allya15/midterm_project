$(() => {
  $.ajax({
    method:"GET",
    url:"/api/comments"
  }).done((resources) => {
    for (resource of resources) {
    }
  })
})
