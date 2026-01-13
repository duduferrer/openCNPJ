import type { Telefone } from "./telefone.js";

export interface Contato {
  email: string;
  telefones: Telefone[];
}
