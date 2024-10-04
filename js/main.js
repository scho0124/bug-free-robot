const h2 = document.querySelector("main > h2");

h2["title"] = "new mouseover text";
h2.title = "new content";
h2.getAttribute("title");
h2.getAttribute("title", "Hello Darryl");

const username = "Valeria";
const span = h2.querySelector("span");
span.textContent = "Jerome";
span.innerHTML = `<i style="front-size: 3rem;">${username}</i>`;

console.log(span);
console.log(h2);

let elements = document.querySelectorAll("p, span, div");
elements.forEach((i) => {
  i.style.fontSize = "1rem";
});

h2.className = "highlight";
h2.classList.add("highlight");
h2.classList.add("bob", "harry");
