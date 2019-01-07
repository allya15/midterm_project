$(() => {
  $.ajax({
    method:"GET",
    url:"/api/userresources"
  }).done((resources) => {
    console.log("My resources: ", resources)
    for (resource of resources) {
      const date = moment(resource.dateAdded).fromNow();
      $("#profile-cards").append(
        `<div class="card">
                <div class="card-body">
                  <h5 class="card-title">${resource.title}</h5>
                  <img src="${resource.image}" class="card-img-top img" alt="fireworks">
                  <p class="card-text">${resource.description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">${date}</small>

                  <!--Action Buttons -->
                      <div class="btn-group btn-group-sm float-right" role="group" aria-label="Action Buttons">
                          <a href="/${resource.id}"><button class="resource-button btn btn-primary btn-sm rounded-0" type="submit"><i class="far fa-eye"></i> | View</button></a>
                      </div>

                </div>

              </div>`
      )
    }
  })
})
