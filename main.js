
$("#turk").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#turk").innerHTML = 
  "<ul class='ul'><li>olives</li><li>pepper</li><li>Zaater</li><li>chilli</li></ul>";
});
$("#turk").dblclick(function(){
  $("#neptune").show();
  $("#margarit").show();
  $("#veget").show();
  $("#turk").hide();
});

$("#neptune").click(function(){
  $("#turk").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#neptune").innerHTML = 
  "<ul class='ul'><li>fries</li><li>olives</li><li>pepperoni</li><li>seafood</li></ul>";
  
});
$("#neptune").dblclick(function(){
  $("#turk").show();
  $("#margarit").show();
  $("#veget").show();
  $("#neptune").hide();
});


$("#margarit").click(function(){
  $("#neptune").hide();
  $("#turk").hide();
  $("#veget").hide();
  document.querySelector("#margarit").innerHTML = 
  "<ul class='ul'><li>olives</li><li>honey</li><li>mashrooms</li><li>pineapple</li></ul>";
});
$("#margarit").dblclick(function(){
  $("#neptune").show();
  $("#turk").show();
  $("#veget").show();
  $("#margarit").hide();
});

$("#veget").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#turk").hide();
  document.querySelector("#veget").innerHTML = 
  "<ul class='ul'><li>olives</li><li>basel</li><li>spinach</li><li>green peppers</li></ul>";
});
$("#veget").dblclick(function(){
  $("#neptune").show();
  $("#margarit").show();
  $("#turk").show();
  $("#veget").hide();
});
$("#custompizza").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide()
  $("#turk").hide()
  $('#listChoices').show()
  $("#listChoices").html(`<div class = 'checking'>
	<div>
    <input type="checkbox" id="garlic" > 
    <label for="garlic">Garlic</label >
  </div>
  <div>
    <input type="checkbox" id="spinach" >
    <label for="spinach">Spinach</label>
  </div>
  <div>
    <input type="checkbox" id="mozz">
    <label for="mozz">Mozzarella Cheese</label>
  </div>
  <div>
    <input type="checkbox" id="cheddar" >
    <label for="cheddar">Cheddar Cheese</label>
  </div>
  <div>
    <input type="checkbox" id="sauce" >
    <label for="sauce">Hot Sauce</label>
  </div>
  <div>
    <input type="checkbox" id="onion">
    <label for="onion">Sliced Green Onion </label>
  </div>
  <div>
    <input type="checkbox" id="eggs">
    <label for="eggs">Eggs</label>
  </div>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Frech basil</label>
  </div>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Chopped artichoke hearts</label>
  </div>
  </div>`)
  
});

