import type { Telefone } from "../types/telefone.js";

export default function createTelefone(
  ddd: string | undefined,
  numero: string | undefined,
  isFax: boolean | undefined
): Telefone {
  return {
    ddd: ddd,
    numero: numero,
    isFax: isFax,
  };
}
