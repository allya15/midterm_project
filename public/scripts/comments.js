$(document).ready(() => {
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/comments"
    }).done((comments) => {
      for (const resource of resources) {
      $(".new-comment").append(
        `<div class="col-sm-30">
        ${comment.comment}
        </div>`);
    };
  })
})
