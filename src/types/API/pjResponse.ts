import type { ApiSocio } from "./apiSocio.js";
import type { ApiTelefone } from "./apiTelefone.js";

export interface PJResponse {
  cnpj?: string;
  razao_social?: string;
  nome_fantasia?: string;

  situacao_cadastral?: string;
  data_situacao_cadastral?: string;

  matriz_filial?: "Matriz" | "Filial" | undefined;
  data_inicio_atividade?: string;

  cnae_principal?: string;
  cnaes_secundarios?: string[] | undefined;

  natureza_juridica?: string;

  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  uf?: string;
  municipio?: string;

  email?: string;

  telefones?: ApiTelefone[];

  capital_social?: string;
  porte_empresa?: string;

  opcao_simples?: string | undefined;
  data_opcao_simples?: string | undefined;

  opcao_mei?: string | undefined;
  data_opcao_mei?: string | undefined;

  QSA?: ApiSocio[];

  [key: string]: unknown;
}
