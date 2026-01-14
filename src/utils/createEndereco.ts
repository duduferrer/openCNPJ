import type { Endereco } from "../types/endereco.js";

export default function createEndereco(
  logradouro: string | undefined,
  numero: string | undefined,
  complemento: string | undefined,
  bairro: string | undefined,
  cep: string | undefined,
  uf: string | undefined,
  municipio: string | undefined
): Endereco & { toString(): string } {
  return {
    logradouro: logradouro,
    numero: numero,
    complemento: complemento,
    bairro: bairro,
    cep: cep,
    uf: uf,
    municipio: municipio,

    toString() {
      return `${logradouro}, ${numero}, ${complemento} - ${bairro} - ${municipio}-${uf} - ${cep}`;
    },
  };
}
