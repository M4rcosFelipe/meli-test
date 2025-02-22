export function formatMoney(currency: string, amount: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,

    maximumFractionDigits: 0,
  }).format(amount);
}
