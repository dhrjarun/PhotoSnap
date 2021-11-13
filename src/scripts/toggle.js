const priceCheck = document.getElementById("price-check");

let monthlies = document.getElementsByClassName("monthly");
monthlies = [].slice.call(monthlies);

console.log(monthlies);

priceCheck.addEventListener("change", () => {
  console.log("checked");
  monthlies.forEach((element) => {
    element.classList.toggle("not-you");
  });
});
