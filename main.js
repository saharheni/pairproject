
$(".btnclass").click(function(){
  $(".pizzas").toggle();
});

$("#turk").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#turk").innerHTML = 
  "<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>GroundBeef</li><li>pepper</li></ul>";
});

$("#neptune").click(function(){
  $("#turk").hide();
  $("#margarit").hide();
  $("#veget").hide();
  document.querySelector("#neptune").innerHTML = 
  "<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>Tuna</li><li>Olives</li></ul>";
});

$("#margarit").click(function(){
  $("#neptune").hide();
  $("#turk").hide();
  $("#veget").hide();
  document.querySelector("#margarit").innerHTML = 
  "<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>Basel</li>";
});

$("#veget").click(function(){
  $("#neptune").hide();
  $("#margarit").hide();
  $("#turk").hide();
  document.querySelector("#veget").innerHTML = 
  "<ul class='ul'><li>TomatoSauce</li><li>Cheeze</li><li>GreenPepper</li><li>Mashrooms</li></ul>";
});


