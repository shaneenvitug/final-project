export default function(amount) {
  const options = {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 2,
  };
  // if it's a whole, dollar amount, leave off the .00
  if (amount % 100 === 0)
  options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-AU', options);
  return formatter.format(amount / 100);
}