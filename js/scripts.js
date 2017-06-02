$(document).ready(function() {
  $("#market form").submit(function(event) {
    event.preventDefault();
    
    var prodPick = $("#product").val();
    var colorPick = $("#color").val();
    var coolPick = $("#coolness").val();
    var namePick = $("#name").val();
    var addressPick = $("#address").val();

    $("#prodList").append(" " + prodPick);
    $("#colorList").append(" " + colorPick);
    $("#coolList").append(" " + coolPick);
    $("#nameList").append(namePick);
    $("#addressList").append(addressPick);

      $("#receipt").show();

    $("#redo").click(function() {
        location.reload();



    });
  });
});
