export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.activity) return tally;
    return tally + cartItem.quantity * cartItem.activity.price;
  }, 0);
}