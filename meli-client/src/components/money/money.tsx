interface Props {
  amount: number;
  currency: string;
}
export default function Money({ amount, currency }: Props) {
  return (
    <>
      {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: currency,

        maximumFractionDigits: 0,
      }).format(amount)}
    </>
  );
}
