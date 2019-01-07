$(() => {
  $.ajax({
    method:"GET",
    url:"/api/resourcesurls"
  }).done((resources) => {
    console.log("This is my resource: ", resources)
    for (resource of resources) {
      const date = moment(resource.dateAdded).fromNow();
      $("#index-cards").append(`
        <div class = "col-sm-4">
        <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">${resource.title}</h5>
          <img src="${resource.image}" class="card-img-top" style="width: 15em; height: 12em;" alt="Card image cap">
          <p class="card-text">${resource.description}</p>

        </div>
        <div class="card-footer">
          <small class="text-muted">${date}</small>

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
