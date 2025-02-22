import "./installments.scss";
interface Props {
  installmentsText: string;
}
export default function Installments({ installmentsText }: Props) {
  //fazendo essa verificação no client para não alterar o formato do retorno da API,
  // mas o ideal seria trazer o 'installments.rate' do backend e verificar se é igual a zero.

  const hasZeroRate = installmentsText.includes("Mismo precio");
  const zeroRateStyle = hasZeroRate ? "installments--zero-rate" : "";

  return <p className={`installments ${zeroRateStyle}`}>{installmentsText}</p>;
}
