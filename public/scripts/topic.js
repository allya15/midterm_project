$(() => {
  $.ajax({
    method:"GET",
    url:"/api/resourcesurls"
  }).done((urls) => {
    for (url of urls) {
      $("#index-cards").append(`
        <div class = "col-sm-4">
        <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">${url.title}</h5>
          <p class="card-text">${url.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${url.dateAdded}</small>

          <!--Action Buttons -->
              <div class="btn-group btn-group-sm float-right" role="group" aria-label="Action Buttons">
                <form action="/${url.id}" method="get">
                  <button class="resource-button btn btn-primary btn-sm rounded-0" type="submit"><i class="far fa-eye"></i> | View</button>
                </form>
              </div>

        </div>

      </div>
      </div>`)
    }
  })
})
