// side navbar
var sidenav = document.querySelector(".side-navbar");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("close-navbar");
menuicon.addEventListener("click", function () {
  console.log("close");

  sidenav.style.left = 0;
});
closenav.addEventListener("click", function () {
  sidenav.style.left = "-50%";
});
// search products
var searchbar = document.getElementById("search-bar");
var products = document.getElementById("product-container");
var productlist = products.querySelectorAll("div");
console.log(productlist);

searchbar.addEventListener("keyup", function () {
  var enteredvalue = event.target.value.toUpperCase();
  for (i = 0; i < productlist.length; i++) {
    var productname = productlist[i]
      .querySelector("h5")
      .textContent
    
      
// product list la ellam div um irukum, antha div la iruka ella h5 um productname ulla potrom

    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
        //ipo product name na h5 la textcontent so h5 la iruka text ethachi enteredvalue oda match achuna 
        // match agura product ah showpannanum enaku antha div ye show pannanum ah
        // product list la tha antha div la iruku, so apo tha image,rate, name ellame show agum
      productlist[i].style.display = "none";
    } else {
      productlist[i].style.display = "block";
    }
  }
});
