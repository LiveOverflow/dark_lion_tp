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

var menu_item = document.createElement("button");
menu_item.className = "btn mouseout menu_item";
menu_item.innerText = "Search Items";
console.log("add menu item");
menu.appendChild(menu_item);

var menu_item = document.createElement("button");
menu_item.className = "btn mouseout menu_item";
menu_item.innerText = "List Sigils/Runes";
console.log("add menu item");
menu.appendChild(menu_item);

var menu_item = document.createElement("button");
menu_item.className = "btn mouseout menu_item";
menu_item.innerText = "Share gw2efficiency Link";
console.log("add menu item");
menu.appendChild(menu_item);

var menu_item = document.createElement("button");
menu_item.className = "btn mouseout menu_item";
menu_item.innerText = "TP Calc";
console.log("add menu item");
menu.appendChild(menu_item);

var menu_item = document.createElement("button");
menu_item.className = "btn mouseout menu_item";
menu_item.innerText = "Test";
console.log("add menu item");
menu.appendChild(menu_item);


// <button class="btn mouseout">Sell My Items</button>