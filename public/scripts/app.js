// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/urls"
//   }).done((urls) => {
//     for(url of urls) {
//       $("<div>").text(url.description).appendTo($("body"));
//     }
//   });;
// });
$(() => {

  $(function () {

    function createResource (resource){
      var $allResources = $("<div>").addClass("all-resources");
      var $singleResource = $("<div>").addClass("resource").appendTo($allResources);
      var $img = $(`<img class="card-img-top" src="${resource.imageURL}"></img>`).appendTo($singleResource);
      var $title = $(`<h3> ${resource.title} - <a href="${resource.resourceURL}">Source</a>`).appendTo($singleResource);
          // var $resourceId = $(`<input type="hidden" id="resourceId" name="resourceId" value="${resource.id}">`).appendTo($singleResource);
      var $description = $(`<p> ${resource.description}</p>`).appendTo($singleResource);
      var $footer = $("<footer>").appendTo($singleResource);
      var $rateButton = $("<button>").addClass("social-buttons rate").text("Rate").appendTo($footer);
      var $likeButton = $("<button>").addClass("social-buttons like").text("Like").appendTo($footer);
      var $commentButton = $("<button>").addClass("social-buttons comment").text("Comment").appendTo($footer);
      var $commentContainer = $("<div>").addClass("comment-container").appendTo($singleResource);
      var $commentForm = $(`<form class="submitComment" method="POST" action="/api/users/comment">`).appendTo($commentContainer);
      var $textArea = $(`<textarea class="commentInput" type="text" name="commentInput" placeholder="Type your comment..."></textarea>`).appendTo($commentForm);
      var $postButton = $(`<input class="commentPost" type="submit" value="Post">`).appendTo($commentForm);
      var $commentSection = $("<div>").addClass("postArea").appendTo($commentContainer);
      return $allResources;
    }

    function renderResources(resourceData){
      resourceData.forEach(function(resource) {
        console.log("Rendering resources: ", resource);
        var $resource = createResource(resource);
        $("section.feed").prepend($resource);
      });
    };
   $(function loadResources() {
      $.ajax({
        method: "GET",
        url: "api/resources"
      }).done((resources) => {
        renderResources(resources);
      })
      .fail(() => {
        alert("Error: resources not rendering properly!");
      });
    });
  });

});
