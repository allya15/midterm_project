$(() => {
  $.ajax({
    method:"GET",
    url:"/api/show"
  }).done((users) => {
    console.log('console', users)

    for (var i of users) {
      console.log(i.id)
      console.log(i.title)
      console.log(i.url)
    }

  })
})
