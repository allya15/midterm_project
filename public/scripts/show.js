// $(() => {
//   $.ajax({
//     method:"GET",
//     url:"/api/show"
//   }).done((resources) => {
//     for (const resource of resources) {
//       $(".resource-title").append(
//         `<div class="col-sm-3">
//         ${resource.title}
//         </div>`);

//     $(".resource-url").append(
//       `<div class="col-sm-3">
//         <a href="${resource.url}">
//         <button class="btn btn-primary ptrlb-5" type="submit">View Odyssey
//         </button>
//         </a>
//         </div>`);

//     $(".resource-description").append(
//       `<div>
//       ${resource.description}
//       </div>`
//     );
//     }

//   })
// })

$(() => {
  $.ajax({
    method:"GET",
    url:"/api/show"
  }).done((resources) => {
    // console.log("These are my resources: ", resources);
    for (const resource of resources) {
      $("#card ml-3 pt-2 mr-2 col-sm-10").append(`
        <div class = "col-sm-4">
        <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">${resource.title}</h5>
          <img class="card-img-top" src="${resource.image}" alt="Card image cap">
          <p class="card-text">${resource.description}</p>

        </div>
        <div class="card-footer">
          <small class="text-muted">${resource.dateAdded}</small>

          <!--Action Buttons -->
              <div class="btn-group btn-group-sm float-right" role="group" aria-label="Action Buttons">
                <form action="/${resource.id}" method="get">
                  <button class="resource-button btn btn-primary btn-sm rounded-0" type="submit"><i class="far fa-eye"></i> | View</button>
                </form>
              </div>

        </div>

      </div>
      </div>`)
    }
  })
})
