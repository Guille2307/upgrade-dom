//2.1
const div$$ = document.createElement("div");
document.body.appendChild(div$$);
//2.2
const div2$$ = document.createElement("div");
document.body.appendChild(div2$$);
const p$$ = document.createElement("p");
div2$$.appendChild(p$$);
//2.3
let divWiht6p = document.createElement("div");
document.body.appendChild(divWiht6p);

for (let i = 0; i < 6; i++) {
  let sixp = document.createElement("p");
  divWiht6p.appendChild(sixp);
}
//2.4
let p2 = document.createElement("p");
p2.textContent = "Soy dinámico!";
document.body.appendChild(p2);

//2.5
let h2$$ = document.createElement("h2");
document.body.appendChild(h2$$);
h2$$.classList.add("fn-insert-here");
h2$$.textContent = "Wubba Lubba dub dub";
//2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
let newUl = document.createElement("ul");
document.body.appendChild(newUl);

for (let app of apps) {
  let newLi = document.createElement("li");
  newLi.textContent = app;
  newUl.appendChild(newLi);
} //2.7
let removeClass = document.querySelectorAll(".fn-remove-me");
// console.log(remuveClass);
for (let remu of removeClass) {
  remu.remove();
}
//2.8
let p3 = document.createElement("p");
p3.textContent = "Aquí voy!";
div = document.querySelectorAll("div");
document.body.insertBefore(p3, div[1]);
//2.9
let insertP = document.querySelectorAll(".fn-insert-here");
for (let insert of insertP) {
  let newAddP4 = document.createElement("p");
  newAddP4.textContent = "Voy dentro!";
  insert.appendChild(newAddP4);
}
