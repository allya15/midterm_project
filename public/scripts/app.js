$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});




$(document).ready(function() {



  const createCard = function(card) {
    let $card = $("<div>").addClass('card');
    let $cardImg = $("<img>").addClass('card-img-top');
    let $cardBody = $("<div>").addClass('card-body');
    let $cardTitle = $("<h5>").addClass('card-title');
    let $cardP = $("<p>").addClass('card-text');
    let $cardFoot = $("<div>").addClass('card-footer');
    let $cardFootText = $("<small>").addClass('text-muted');

    $card.append($cardImg, $cardBody, $cardFoot);
    $cardImg.attr();  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    $cardBody.append($cardTitle, $cardP);
    $cardFoot.append($cardFootText);
  };













})



```
    <div class="card">
      <img class="card-img-top" src=".../100px180/" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Added 3 mins ago</small>
      </div>
    </div>
```