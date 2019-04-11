$(document).ready(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);

    //$("table").append(e.type + ": " + e.timeStamp);
  });

  $("#userFontInput").on("click", function(e) {
    //$("table").append($(this).is(':checked'));
    var inputFont = $(this).is(':checked');
    
    updatePrice($('#userSignInput').val().length,inputFont)
  });
  
  $("#confirmOrder").on("click", function(e) {
  event.preventDefault();
  //console.log('is it firing?');
   var previewMsg = $("#userSignInput").val();

   $('#previewScreen').append(previewMsg);
   $('#previewScreen').toggle().animate({'right': '0px'}, 250);
  });
  
  $("#cancelPreview").on("click", function(e) {
  event.preventDefault();
  //console.log('is it firing?');
   $('#previewScreen').toggle();
  });
});

function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  
  if(fontUpgrade){
    console.log('upgrading your tile cost');
    costPerTile = 6;
  }
  else {
    costPerTile = 5;
  }
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  if (signLength != 0) {
    shipping = 7;
  }
  else {
    shipping = 0;
  }
  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}