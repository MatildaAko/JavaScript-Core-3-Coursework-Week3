let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt() {
  console.log("QTY", "ITEM", "TOTAL");
  order.forEach(item => {
    let { quantity, itemName, unitPrice } = item;
    let totalItemPrice = (unitPrice * quantity).toFixed(2);
    console.log(quantity, itemName, totalItemPrice);
  })
  let total = order.reduce((totalPrice, currentPrice) => {
      return totalPrice + (currentPrice.unitPrice * currentPrice.quantity)
    }, 0)
  console.log(`Total: ${total}`)
}

printReceipt()