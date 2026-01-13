import type { Contato } from "./contato.js";
import type { Endereco } from "./endereco.ts";
import type { Socio } from "./socio.js";

export interface PJInfo {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;

  situacaoCadastral: string;
  dataSituacaoCadastral: Date;
  matrizFilial: "Matriz" | "Filial";
  data_inicio_atividade: Date;

  cnaePrincipal: string;
  cnaesSecundarios: string[];
  naturezaJuridica: string;

  endereco: Endereco;
  contato: Contato;

  capitalSocial: Number;
  porteEmpresa: string; //TODO adicionar valores pre definidos
  opcaoSimples: string; //TODO verificar se a opcao é S/N
  dataOpcaoSimples: Date;
  opcaoMei: string; //TODO verificar opcao S/N
  dataOpcaoMei: Date;

  socios: Socio[];
}
