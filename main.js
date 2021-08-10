

$(".btnclass").click(function(){
  $(".pizzas").toggle();
  $("#submit").hide();
});

$("#turk").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide();
  $("#custompizza").hide();
  $("#submit").show();
  $("#turk").html("<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>GroundBeef</li><li>pepper</li><li id='price'>Price:20DT</li></ul>");
});

$("#turk").dblclick(function(){
  $("#neptune").show();
  $("#margarit").show();
  $("#veget").show();
  $("#turk").hide();
  $("#custompizza").show();
  $("#submit").hide();
});

$("#neptune").click(function(){
  $("#turk").hide();
  $("#margarit").hide();
  $("#veget").hide();
  $("#custompizza").hide();
  $("#submit").show();
  $("#neptune").html("<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>Tuna</li><li>Olives</li><li id='price'>Price:16DT</li></ul>");
});

$("#neptune").dblclick(function(){
  $("#turk").hide();
  $("#margarit").show();
  $("#veget").show();
  $("#neptune").hide();
  $("#custompizza").show();
  $("#submit").hide();
});

$("#margarit").click(function(){
  $("#neptune").hide();
  $("#turk").hide();
  $("#veget").hide();
  $("#custompizza").hide();
  $("#submit").show();
  $("#margarit").html("<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>Basel</li><li id='price'>Price:12DT</li></ul>");
});

$("#margarit").dblclick(function(){
  $("#neptune").hide();
  $("#turk").hide();
  $("#veget").show();
  $("#margarit").hide();
  $("#custompizza").show();
  $("#submit").hide();
});

$("#veget").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#turk").hide();
  $("#custompizza").hide();
  $("#submit").show();
  $("#veget").html("<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>GreenPepper</li><li>Mashrooms</li><li id='price'>Price:14DT</li></ul>");
});

$("#veget").dblclick(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#turk").hide();
  $("#veget").hide();
  $("#custompizza").show();
  $("#submit").hide();
});

$("#custompizza").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide()
  $("#turk").hide()
  $("#submit").show();
  $('#listChoices').show()
  $("#listChoices").html(`<div class = 'checking'><div>
    <input type="checkbox" id="garlic" > 
    <label for="garlic">Garlic 1DT</label >
  </div>
  <div>
    <input type="checkbox" id="spinach" >
    <label for="spinach">Spinach 2DT</label>
  </div>
  <div>
    <input type="checkbox" id="mozz">
    <label for="mozz">Mozzarella Cheese 4DT</label>
  </div>
  <div>
    <input type="checkbox" id="cheddar" >
    <label for="cheddar">Cheddar Cheese 5DT</label>
  </div>
  <div>
    <input type="checkbox" id="sauce" >
    <label for="sauce">Hot Sauce 3DT</label>
  </div>
  <div>
    <input type="checkbox" id="onion">
    <label for="onion">Sliced Green Onion 1DT </label>
  </div>
  <div>
    <input type="checkbox" id="eggs">
    <label for="eggs">Eggs 1DT</label>
  </div>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Frech basil 1DT</label>
  </div>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Chopped artichoke hearts 1DT</label>
  </div>
  </div>`)
  
});

$('#submit').click (function (){
 window.alert ('Your order will be shipped ASAP!!!')
});

