$(document).ready(function() {

  const createCard = function(data) {
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


  const loadCard = function(data) {
    $deck.empty(); //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    for (var i in data) {
      const $card = createCard(data[i])
      $deck.prepend($card) //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }
  };


  const placeCard = function() {
    $.ajax({
      url: '',  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      method: 'GET',
      success: function(result) {
        loadCard(result)
      }
    })
  }


placeCard();
})