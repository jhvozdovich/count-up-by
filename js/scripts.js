$(document).ready(function () {
  $("#user-info").submit(function (event) {
    event.preventDefault();

    var countTo = parseInt($("#count-to").val());
    var countBy = parseInt($("#count-by").val());

    if (countTo < 0 || countBy < 0) {
      alert("No negative numbers please!");
      return true;
    } else if (isNaN(countBy) || isNaN(countTo)) {
      alert("Please enter a positive number!");
      return true;
    } else if (countTo < countBy) {
      alert("You can't count to " + countTo + " if you are counting by " + countBy + "!");
      return true;
    }

    var countList = [];
    for (var i = 0; i <= countTo; i += countBy) {
      if (i !== 0) {
        countList.push(i);
      }
    }

    countList.forEach(function (item) {
      $("<li>" + item + "</li>").appendTo("#resultList")
    });

    $("#result").show();
  });
});