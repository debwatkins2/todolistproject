//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete todo, on(click) on ul makes it work on new and old elements.
$("ul").on("click", "span", function(event){
  //first (this) refers to span
  $(this).parent().fadeOut(500,function() {
    //this refers to the li
    $(this).remove();
  });
  //event bubbling: starts at span and travels up to li, ul, body - tell it not to bubble:
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>   " + todoText + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
