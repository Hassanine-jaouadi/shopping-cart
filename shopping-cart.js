/* Delete product items */
function deleteSbedri() {
  document.getElementById("sbedri").innerHTML = "";
}

function deleteKlasset() {
  document.getElementById("klasset").innerHTML = "";
}

function deleteKartaba() {
  document.getElementById("kartaba").innerHTML = "";
}

/* clear basket */
let removeProducts = document.getElementById("delete-button");
removeProducts.addEventListener("click", deleteAll);

function deleteAll() {
  document.getElementById("shopping-bag").innerHTML = "";
  alert("You are going to clear your cart!");
  document.getElementById("shopping-bag").innerHTML = "You cart is empty now!";
  document.getElementById("total").textContent = 0 ;
}

/* Like products */

/*function likeProduct() {
    document.getElementById("like-button").style.backgroundColor= "red";
    document.getElementById("like-button").innerHTML = "Liked";

} */

let like = document.getElementById("like-button");
like.addEventListener("click", likeProduct);

function likeProduct() {
  like.style.backgroundColor = "red";
}

/* Increase or Decrese quantity */

let qtes = Array.from(document.getElementsByClassName("number"));

let prices = Array.from(document.getElementsByClassName("price"));
// console.log(prices);
let plus = Array.from(document.getElementsByClassName("plus"));

let moin = Array.from(document.getElementsByClassName("moin"));
const total = document.getElementById("total");
console.log('total :', total);

// console.log(total.innerText)
let remove = Array.from(document.querySelectorAll("remove"));
// console.log(remove)
let liste = Array.from(document.querySelectorAll(".lis"));

// fonction total
const totale = () => {
  let somme = 0;
  console.log("qtes :", qtes);
  for (let i in qtes) {
    console.log("qtes[i]", qtes[i]);
    somme += qtes[i].value * prices[i].innerText;
  }
  document.getElementById("total").textContent = somme + "$"
};

//  events
for (let i in plus) {
  plus[i].addEventListener("click", () => {
    qtes[i].value = Number(qtes[i].value) + 1;
    totale();
  });
}
for (let i in moin) {
  moin[i].addEventListener("click", () => {
    if (qtes[i].value > 0) {
      qtes[i].value = Number(qtes[i].value) - 1;
      totale();
    }
  });
}

/* count total price */

//like.map(el=> el.addEventListener('click', el.style.color=='red'? el.style.color=black:))
