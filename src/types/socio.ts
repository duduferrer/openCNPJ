export interface Socio {
  nome: string | undefined;
  cnpjOuCpf: string | undefined;
  qualificacao: string | undefined; //TODO usar como base a lista da receita
  dataEntrada: Date | undefined;
  identificador: "Pessoa Física" | "Pessoa Jurídica" | undefined;
  faixaEtaria: String | undefined; //TODO transformar em intervalo de tempo
}
