export interface Price {
  currency: string;
  amount: number;
  decimals: number;
  regular_amount: number | null;
}
