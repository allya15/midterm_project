$(() => {
  $.ajax({
    method:"GET",
    url:"/api/show"
  }).done((resources) => {

    for (const resource of resources) {
      $(".resource-title").append(
        `<div class="col-sm-8">
        <strong>${resource.title}</strong>
        </div>`);

    $(".resource-url").append(
      `<div class="col-sm-3">
        <a href="${resource.url}">
        <button class="btn btn-primary ptrlb-5" type="submit">View Odyssey
        </button>
        </a>
        </div>`);



   $(".resource-image").append(
      `<div class="col-sm-3">
        <img src="${resource.image}" style="width: 15em; height: 12em;">
        </div>`);

   $(".resource-rating").append(
    `<div class="col-sm-8">
        ${resource.rating}
        </div>`
    );

    $(".resource-description").append(
      `<div class="col-sm-8">
      <small>${resource.description}</small>
      </div>`
    );

    // $(".resource-rating").append(
    //   `<div >
    //     ${ratings.rated}
    //     </div>`
    //   );
    }




  })
})
