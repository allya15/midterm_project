// App.js handles the functionality of various components within the site, without reloading
// the web page (jQuery - client side)
$(() => {

  $(function () {

    //CREATES THE RESOURCE DOM TREE
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

    // CREATES THE COMMENT DOM TREE
    function createComment (comment) {
      var $eachComment = $("<div>").addClass("comment");
        var $header = $("<header>").appendTo($eachComment);
          var $userName = $(`<h4 class="username">${comment.user_id}</h4>`).appendTo($header);
        var $content = $("<p>").text(`${comment.comment}`).appendTo($eachComment);
        var $footer = $("<footer>").appendTo($eachComment);
          var $span = $("<span>").addClass("timestamp").text("19 seconds ago").appendTo($footer);
      return $eachComment;
    }

    //HANDLES THE TOGGLING OF COMMENTS (NOT POSTING)
    $(function toggleComments() {
      let $commentToggleButton = $(".social-buttons .comment");
      $commentToggleButton.on("click", function(event) {
        event.preventDefault();
        console.log("Toggle comment button clicked!");
        $(".comment-container").slideToggle("slow");
        $(".commentInput").focus();
      })
    });

    //RENDERS THE RESOURCES
    function renderResources(resourceData){
      resourceData.forEach(function(resource) {
        console.log("Rendering resources: ", resource);
        var $resource = createResource(resource);
        $("section.feed").prepend($resource);
      });
    };

    //RENDERS THE COMMENTS
    function renderComments(commentData){
      commentData.forEach(function(comment) {
        var $comment = createComment(comment);
        $("section.feed div.all-resources div.resource div.comment-container div.postArea").prepend($comment);
      });
    };

    //LOADS THE RESOURCES ON PAGE LOAD (GET)
    $(function loadResources() {
      $.ajax({
        method: "GET",
        url: "api/users"
      }).done((resources) => {
        renderResources(resources);
      })
      .fail(() => {
        alert("Error: resources not rendering properly!");
      });
    });

    $(function loadComments() {
      $.ajax({
        method: "GET",
        url: "api/users"
      }).done((comments) => {
        renderComments(comments);
      })
      .fail(() => {
        alert("Error: comments not rendering properly!");
      });
    });


        // POST THE COMMENTS and RELOAD
      $(".feed .all-resources .resource .comment-container .comment form").on("submit", function(event) {
        event.preventDefault();
        const formContent = $(this).serialize();
        $.ajax({
          method: "POST",
          url: "api/users",
          data: formContent
        }).done((comments) => {
          console.log("Got comments: ", comments);
          loadComments();
        })
        .fail(() => {
          alert("Error: comments not rendering properly!");
        });
      });



  })
})
