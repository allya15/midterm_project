$(() => {
    $.ajax({
      method: "GET",
      url: "/api/searchresult"
    }).done((resources) => {
      for(details of resources) {
        const $resource = $("<article>").addClass("resource").appendTo($("#resource"));
        const $header = $("<header>").appendTo($resource);
        $("<p class='resource-title'>").text(details.title).appendTo($header);
        $("<p class='resource-description'>").text(details.description).appendTo($resource);

        const $footer = $("<footer>").html(`<a href="/${details.id}">View resource</a>`).appendTo($resource);
      }
    });
  });
