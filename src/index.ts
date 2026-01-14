import type { PJInfo } from "./types/pj-info.js";
import validateCNPJ from "./utils/cnpjValidation.js";
import createPJInfo from "./utils/createPJInfo.js";
import fetchCNPJ from "./utils/fetchCNPJ.js";

const BASE_URL = "https://api.opencnpj.org/";
/**
 * Busca o CNPJ informado na API: opencnpj.org
 *
 *
 * @param cnpj CNPJ a ser buscado. Aceito nos formatos 00000000000000, 00.000.000/0000-00, 00.000.000/000000
 * @returns Dados completos CNPJ
 * @throws {ApiError}
 * - 404: CNPJ não encontrado
 * - 429: Limite de requisições excedido
 * - Erro de rede ao acessar a API
 * - Erro ao fazer parse da resposta
 *
 */
export async function buscaCNPJ(cnpj: string): Promise<PJInfo> {
  const validCNPJ = validateCNPJ(cnpj);
  const URL = BASE_URL.concat(validCNPJ);
  const data = await fetchCNPJ(URL);
  const pjInfo = createPJInfo(data);
  return pjInfo;
}
