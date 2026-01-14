export class cnpjError extends Error {
  readonly code: "INVALID_CNPJ";
  constructor(message: string) {
    super(message);
    this.name = "CnpjValidationError";
    this.code = "INVALID_CNPJ";
  }
}
