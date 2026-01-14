import type { PJInfo } from "../types/pj-info.js";
import type { PJResponse } from "../types/API/pjResponse.js";
import createContato from "./createContato.js";
import createDateObject from "./dateConvertion.js";
import createEndereco from "./createEndereco.js";
import CreateQSA from "./createQSA.js";
import getCnaesSecundarios from "./getCnaesSecundarios.js";

export default function createPJInfo(apiResponse: PJResponse): PJInfo {
  return {
    cnpj: String(apiResponse.cnpj),
    razaoSocial: String(apiResponse.razao_social),
    nomeFantasia: String(apiResponse.nome_fantasia),

    situacaoCadastral: String(apiResponse.situacao_cadastral),
    dataSituacaoCadastral: createDateObject(
      apiResponse.data_situacao_cadastral
    ),
    matrizFilial: apiResponse.matriz_filial,
    dataInicioAtividade: createDateObject(apiResponse.data_inicio_atividade),

    cnaePrincipal: String(apiResponse.cnae_principal),
    cnaesSecundarios: getCnaesSecundarios(apiResponse.cnaes_secundarios),
    naturezaJuridica: String(apiResponse.natureza_juridica),

    endereco: createEndereco(
      apiResponse.logradouro,
      apiResponse.numero,
      apiResponse.complemento,
      apiResponse.bairro,
      apiResponse.cep,
      apiResponse.uf,
      apiResponse.municipio
    ),
    contato: createContato(apiResponse.email, apiResponse.telefones),

    capitalSocial: Number(apiResponse.capital_social),
    porteEmpresa: String(apiResponse.porte_empresa),
    opcaoSimples: String(apiResponse.opcao_simples),
    dataOpcaoSimples: createDateObject(apiResponse.data_opcao_simples),
    opcaoMei: String(apiResponse.opcao_mei),
    dataOpcaoMei: createDateObject(apiResponse.data_opcao_mei),
    socios: CreateQSA(apiResponse.QSA),
  };
}
