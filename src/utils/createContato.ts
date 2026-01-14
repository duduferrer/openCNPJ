import type { Contato } from "../types/contato.js";
import type { Telefone } from "../types/telefone.js";
import type { ApiTelefone } from "../types/API/apiTelefone.js";
import createTelefone from "./createTelefone.js";

export default function createContato(
  email: string | undefined,
  APItelefones: ApiTelefone[] | undefined
): Contato {
  let telefonesList: Telefone[] = [];
  APItelefones?.map((item) => {
    telefonesList.push(createTelefone(item.ddd, item.numero, item.is_fax));
  });
  return {
    email: email,
    telefones: telefonesList,
  };
}
