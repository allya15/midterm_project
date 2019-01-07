$(() => {
  $.ajax({
    method:"GET",
    url:"/api/comments"
  }).done((resources) => {
    console.log("These are my resources: ", resources);
    for (resource of resources) {
    }
  })
})
