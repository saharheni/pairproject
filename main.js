
$("#turk").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#turk").innerHTML = 
  "<ul class='ul'><li>olives</li><li>pepper</li><li>Zaater</li><li>chilli</li></ul>";
});

$("#neptune").click(function(){
  $("#turk").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#neptune").innerHTML = 
  "<ul class='ul'><li>fries</li><li>olives</li><li>pepperoni</li><li>seafood</li></ul>";
});

$("#margarit").click(function(){
  $("#neptune").hide();
  $("#turk").hide();
  $("#veget").hide();
  document.querySelector("#margarit").innerHTML = 
  "<ul class='ul'><li>olives</li><li>honey</li><li>mashrooms</li><li>pineapple</li></ul>";
});

$("#veget").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#turk").hide();
  document.querySelector("#veget").innerHTML = 
  "<ul class='ul'><li>olives</li><li>basel</li><li>spinach</li><li>green peppers</li></ul>";
});

