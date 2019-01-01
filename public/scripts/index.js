$(() => {
  $.ajax({
    method:"GET",
    url:"/api/resourcesurls"
  }).done((resources) => {
    console.log("These are my resources: ", resources);
    for (resource of resources) {
      $("#index-cards").append(`<div class="card">
        <div class="card-body">
          <h5 class="card-title">${resource.title}</h5>
          <p class="card-text">${resource.description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Added 3 mins ago</small>

          <!--Action Buttons -->
              <div class="btn-group btn-group-sm float-right" role="group" aria-label="Action Buttons">
                <form action="/show" method="get">
                  <button class="btn btn-primary btn-sm rounded-0" type="submit"><i class="fas fa-comments"></i></button>
                </form>
                <form action="/show" method="get">
                  <button class="btn btn-primary btn-sm rounded-0" type="submit"><i class="fas fa-thumbs-up"></i></button>
                </form>
                <form action="/show" method="get">
                  <button class="btn btn-primary btn-sm rounded-0" type="submit"><i class="fas fa-star-half-alt"></i></button>
                </form>
              </div>

        </div>

      </div>`)
    }
  })
})
