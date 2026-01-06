import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function styleBody() {
  Object.assign(document.body.style, {
    backgroundColor: "#2c3e50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0"
  });
}



function styleCard(card) {
   Object.assign(card.style, {
    width: "250px",
    height: "350px",
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "9px",
    fontFamily: "Georgia, serif",
    fontSize: "32px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "10px 10px 25px rgba(0,0,0,0.4)"
  });
}

function styleCenter(el) {
  el.style.fontSize = "100px";
  el.style.textAlign = "center";
}

function styleBottom(el) {
   el.style.transform = "rotate(180deg)";
}
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function () {



  styleBody();

  const card = document.getElementById("card");
  styleCard(card);

  const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const figures = ["♥","♦","♠","♣"];

  const value = getRandomItem(values);
  const figure = getRandomItem(figures);

  card.style.color = (figure === "♥" || figure === "♦") ? "red" : "black";

  const top = document.createElement("div");
  top.innerHTML = `${value}<br>${figure}`;

   const center = document.createElement("div");
  center.textContent = figure;
  styleCenter(center);

   const bottom = document.createElement("div");
  bottom.innerHTML = `${value}<br>${figure}`;
  styleBottom(bottom);

  card.appendChild(top);
  card.appendChild(center);
  card.appendChild(bottom);
};
