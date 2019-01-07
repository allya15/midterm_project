$(document).ready(() => {
$(() => {
    $.ajax({
      method: "GET",
      url: "/api/comments"
    }).done((comments) => {
      for(let comment of comments) {
        let $comment = $("<article>").text(comment.comment).prependTo($(".all-comments"));

        $("<p>").addClass("created-by").text(`Comment by: ${com.username}`).appendTo($comment);
      }
    });
  })
})
