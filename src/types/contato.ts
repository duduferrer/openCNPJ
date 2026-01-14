import type { Telefone } from "./telefone.js";

export interface Contato {
  email: string | undefined;
  telefones: Telefone[] | undefined;
}
