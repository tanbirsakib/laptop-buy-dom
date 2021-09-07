// Place All ID
const extraMemory = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage-cost");
const deliveryCharge = document.getElementById("delivery-cost");
const cuponTotal = document.getElementById("promo-total");
const apply = document.getElementById("apply");
const IMacPrice = 1299;
const promoCode = "stevekaku";
const discValue = 20;
// update iMAC price
function updateImacPrice(IDNAME) {
  document.getElementById(IDNAME).innerText = IMacPrice;
}
updateImacPrice("IMAc-price");
updateImacPrice("totalCost");
updateImacPrice("promo-total");
// updated common function
function update(idName, productValue) {
  const product = document.getElementById(idName);
  product.innerText = productValue;
  sum();
}
// eventListener common function
function eventCommonFunction(idName, eventType, Id, value) {
  document.getElementById(idName).addEventListener(eventType, function () {
    update(Id, value);
  });
}
// all component price with summation
function sum(productValue) {
  const a = Number(document.getElementById("extra-memory").innerText);
  const b = Number(document.getElementById("extra-storage-cost").innerText);
  const c = Number(document.getElementById("delivery-cost").innerText);
  const totalCost = (document.getElementById("totalCost").innerText =
    IMacPrice + a + b + c);
  cuponTotal.innerText = totalCost;
}
//use eventListener common function
eventCommonFunction("configuration-memory", "click", "extra-memory", 0);
eventCommonFunction("16GB-memory", "click", "extra-memory", 180);
eventCommonFunction("configuration-storage", "click", "extra-storage-cost", 0);
eventCommonFunction("storage-512", "click", "extra-storage-cost", 100);
eventCommonFunction("storage-1tb", "click", "extra-storage-cost", 180);
eventCommonFunction("free-delivery", "click", "delivery-cost", 0);
eventCommonFunction("paid-delivery-cost", "click", "delivery-cost", 20);
// Coupon ADDED

function discControl(idName, eventClick, codeFieldID, discAmountID) {
  document.getElementById(idName).addEventListener(eventClick, function () {
    const promoCOde = document.getElementById(codeFieldID);
    if (promoCOde.value === promoCode) {
      const totalAmount = totalCost.innerText;
      const discAMount = (totalAmount * discValue) / 100;
      cuponTotal.innerText = totalAmount - discAMount;
      promoCOde.value = "";
      document.getElementById(discAmountID).innerText =
        discAMount + " (" + discValue;
      apply.innerText = "applied";
    } else {
      apply.innerText = "failed";
    }
  });
}

discControl("apply", "click", "cupon-field", "disc_amount")
