var shoppingCart = [
"Carne",
"Pesce",
"Uova",
"Frutta secca",
"Frutta"
];

for (var i = 0; i < shoppingCart.length; i++) {

  var template = $(".template li").clone();
  template.append(shoppingCart[i]);
$(".to-do-list").append(template)
}
