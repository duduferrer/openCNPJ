import type { Contato } from "./contato.js";
import type { Endereco } from "./endereco.ts";
import type { Socio } from "./socio.js";

export interface PJInfo {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;

  situacaoCadastral: string;
  dataSituacaoCadastral: Date | undefined;
  matrizFilial: "Matriz" | "Filial" | undefined;
  dataInicioAtividade: Date | undefined;

  cnaePrincipal: string;
  cnaesSecundarios: string[] | undefined;
  naturezaJuridica: string;

  endereco: Endereco;
  contato: Contato;

  capitalSocial: Number;
  porteEmpresa: string; //TODO adicionar valores pre definidos
  opcaoSimples: string; //TODO verificar se a opcao é S/N
  dataOpcaoSimples: Date | undefined;
  opcaoMei: string; //TODO verificar opcao S/N
  dataOpcaoMei: Date | undefined;

  socios: Socio[] | undefined;
}
