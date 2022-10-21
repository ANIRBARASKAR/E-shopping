const cart = [
    { id: 2, name: "hp", qty: 1, price: 200 },
    { id: 3, name: "apple", qty: 1, price: 300 },
    { id: 1, name: "dell", qty: 5, price: 100 },
]

const cartItem = { id: 10, name: "msi", qty: 1, price: 100 }
const index = cart.findIndex(item => item.id === cartItem.id)

if (index >= 0) {
    // replace
    cart[index].qty = cartItem.qty
} else {
    // add
    cart.push(cartItem)
}
console.log(cart);
// const result = arr.filter(item => item.id !== 2)
// console.log(result);

// const result = arr.reduce((total, item) => total + item.qty * item.price, 0)
// console.log(result);
// const result = arr.map(item => item.qty * item.price)
// console.log(result);
// const r = 30 / 200 * 100
// const r = 30 / 100 * 200
// const r = 30 / 100 * 200
// console.log(r);