import type { Socio } from "../types/socio.js";
import type { ApiSocio } from "../types/API/apiSocio.js";
import DateConvertion from "./dateConvertion.js";

export default function CreateQSA(
  qsa: ApiSocio[] | undefined
): Socio[] | undefined {
  let sociosList: Socio[] = [];
  if (qsa !== undefined) {
    qsa.map((item) => {
      sociosList.push({
        nome: item.nome_socio,
        cnpjOuCpf: item.cnpj_cpf_socio,
        qualificacao: item.qualificacao_socio,
        dataEntrada: DateConvertion(item.data_entrada_sociedade),
        identificador: item.identificador_socio,
        faixaEtaria: item.faixa_etaria,
      });
    });
    return sociosList;
  } else {
    return undefined;
  }
}
