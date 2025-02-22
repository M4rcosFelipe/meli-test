export function calculateDiscountPercentage(
  originalValue: number,
  currentValue: number
) {
  if (currentValue > originalValue) {
    return 0;
  }

  const discount = ((originalValue - currentValue) / originalValue) * 100;

  return Math.round(discount);
}
