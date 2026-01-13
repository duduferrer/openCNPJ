export interface Socio {
  nome: string;
  cnpjOuCpf: string;
  qualificacao: string; //TODO usar como base a lista da receita
  dataEntrada: Date;
  identificador: "Pessoa Física" | "Pessoa Jurídica";
  faixaEtaria: "String"; //TODO transformar em intervalo de tempo
}
