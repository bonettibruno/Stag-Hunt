import { DIFIInput } from 'identityfusion';


var opts = {scale: 3};
var spinner = new Spinner(opts);

var freezeForm = function ($toDisable) {
  console.log("Running spinner.");
  var target = document.getElementById('spinner');
  $toDisable.forEach(function ($element) {
    $element.attr("disabled", true);
  });
  spinner.spin(target);
};

$(document).ready(function() {

  // Initialize DIFI widget
  var $DIFI = $('input.DIFI-input');
  if ($DIFI.length) {
    var input = new DIFIInput(
      $DIFI.get(0),
      {
        groupLabel: $DIFI.attr('data-group-label'),
        groupImage: $DIFI.attr('data-group-image')
      }
    );
  }

  // Submit the questionnaire.
  $("#submit-questionnaire").click(function() {
    console.log("Submitting questionnaire.");
    freezeForm([$("form :input"), $("#submit-questionnaire")]);
    Dallinger.submitQuestionnaire("questionnaire", submitAssignment);
  });

});
