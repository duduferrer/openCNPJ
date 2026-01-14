export interface ApiSocio {
  nome_socio?: string | undefined;
  cnpj_cpf_socio?: string | undefined;
  qualificacao_socio?: string | undefined;
  data_entrada_sociedade?: string | undefined;
  identificador_socio?: "Pessoa Física" | "Pessoa Jurídica" | undefined;
  faixa_etaria?: string | undefined;

  [key: string]: unknown;
}
