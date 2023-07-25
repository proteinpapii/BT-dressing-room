
function JSONResponse() {
  fetch("../data/Data.json")
    .then((response) => response.json())
    .then((data) => handleRenderTabUI(data))
    .catch((err) => console.log(err));
}
JSONResponse();

function handleRenderTabUI(data) {
  console.log(data);
  let navList = document.getElementById("tab-container");
  navList.innerHTML = "";
  data.navPills.forEach((navPill) => {
    let navTab = document.createElement("button");
    navTab.innerHTML = navPill.showName;
    navTab.value = navPill.type;
    navTab.addEventListener("click", (e) =>
      handleRenderBodyUI(e.target.value, data.tabPanes)
    );
    navList.appendChild(navTab);
  });
  console.log(navList);
}

function handleRenderBodyUI(selectedType, data) {
  console.log(selectedType);
  let productList = document.getElementById("product-container");
  productList.innerHTML = "";
  data
    .filter((typeList) => typeList.type === selectedType)
    .forEach((item) => {
      let productTitle = document.createElement("p");
      let productImg = document.createElement("img");
      productImg.src = item.imgSrc_jpg;
      //let productButton = document.createElement("button");
      let productCard = document.createElement("div");
      // let productDesc = document.createElement("div");
      productCard.className = "product-card";
      productTitle.innerHTML = item.name;
      // productDesc.innerHTML = item.desc;
      productCard.appendChild(productImg);
      productCard.appendChild(productTitle);
      //productCard.appendChild(productButton);
      // productCard.appendChild(productDesc);
      productList.appendChild(productCard);
    });

}
