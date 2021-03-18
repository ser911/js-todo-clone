var shoppingCart = [
"Carne",
"Pesce",
"Uova",
"Frutta secca",
"Frutta"
];

for (var i = 0; i < shoppingCart.length; i++) {

  var template = $(".template li").clone();
  template.prepend(shoppingCart[i]);
  $(".to-do-list").append(template);

}

$(".to-do-list-delete").click(function(){
 $(this).parent().remove();


});
