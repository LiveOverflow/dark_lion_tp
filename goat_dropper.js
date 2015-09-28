// WoodenPotatoes Reference
console.log("Goat Dropper - Victory...");

var css = document.createElement("link");
css.href = "https://liveoverflow.github.io/dark_lion_tp/style.css";
css.rel = "stylesheet"
document.head.appendChild(css);

console.log("... or Death.");

var menu = document.createElement("div");
menu.id = "menu";
document.body.appendChild(menu);

for(var i=0; i<5; i++) {
	var menu_item = document.createElement("div");
	menu_item.className = "menu_item";
	menu_item.innerText = "menu_item"
	console.log("add menu item");
	menu.appendChild(menu_item);
}