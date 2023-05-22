function updataProductInput (productId, price, isIncrease) {
  const productInput = document.getElementById(productId + '-number'); 
  let productNumber =productInput.value;
  if (isIncrease) {
    productInput.value = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
  productInput.value = parseInt(productNumber) - 1;
  }
  
  productNumber = productInput.value
  const totalProductPrice = document.getElementById(productId + '-total');
   totalProductPrice.innerText = productNumber * price;
  
  
  
  calculateTotal()
  }
  
  function updataProductQuantity(id) {
  const productInput = document.getElementById(id+'-number');
   const productNumber = parseInt(productInput.value);
  return productNumber;
  }
  
  function calculateTotal() {
  const watchAmmount = updataProductQuantity('watch') * 120;
  const sunglassAmmount = updataProductQuantity('sunglass') * 20;
   const subTotal = watchAmmount + sunglassAmmount;
  const tax = subTotal / 10;
  const grandTotal = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal; document.getElementById('tax').innerText = tax; document.getElementById('grand-total').innerText = grandTotal;
  }
  
  
  
  
  document.getElementById('watch-plus').addEventListener('click', function () { updataProductInput('watch', 120, true)
  })
  document.getElementById('watch-minus').addEventListener('click', function () { updataProductInput('watch', 120, false)
  })
  // sunglass
  document.getElementById('sunglass-plus').addEventListener('click', function () {   updataProductInput('sunglass', 20, true)
  })

  document.getElementById('sunglass-minus').addEventListener('click', function () { updataProductInput('sunglass', 20, false)
  })



  // clock
function clock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let AmPm = "AM";
  // console.log(seconds);

  if (hours>12) {
    AmPm = 'PM';
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  //12=0
  if (hours == 0) {
    hours = 12;
  }

  document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds+AmPm;

}
  setInterval(clock, 1000)