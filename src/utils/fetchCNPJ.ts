import { ApiError } from "../errors/ApiError.js";
import type { PJResponse } from "../types/API/pjResponse.js";

export default async function fetchCNPJ(url: string): Promise<PJResponse> {
  let res: Response;
  try {
    res = await fetch(url);
  } catch (e) {
    throw new ApiError("Erro ao consumir API. Erro de rede.", { cause: e });
  }
  if (!res.ok) {
    if (res.status == 404) {
      throw new ApiError(
        "CNPJ não encontrado no banco de dados. Certifique-se que o CNPJ está correto.",
        { status: res.status }
      );
    }
    if (res.status == 429) {
      throw new ApiError(
        "Limite de requisições excedido. Verifique os limites na documentação da API.",
        { status: res.status }
      );
    }
    throw new ApiError("Erro ao consumir API", {
      status: res.status,
    });
  }
  try {
    return (await res.json()) as Promise<PJResponse>;
  } catch (e) {
    throw new ApiError("Erro ao fazer o parse da resposta.", {
      cause: e,
    });
  }
}
